const fs = require('fs');
const path = require('path');
const http = require('http');
const { chromium } = require(path.join(process.env.TEMP, 'canitos-qa/node_modules/playwright'));
const root = path.resolve(__dirname, '..');
const report = { widths: [], errors: [], checks: {} };
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.ttf':'font/ttf'};
const server = http.createServer((req,res) => {
  const file = path.resolve(root, '.' + decodeURIComponent(req.url.split('?')[0] === '/' ? '/index.html' : req.url.split('?')[0]));
  if (!file.startsWith(root + path.sep)) {res.writeHead(403).end(); return;}
  fs.readFile(file,(err,data) => {res.writeHead(err?404:200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(err?'Not found':data);});
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({channel:'chrome',headless:true});
  try {
    const context = await browser.newContext({permissions:['clipboard-read','clipboard-write'],reducedMotion:'reduce'});
    const page = await context.newPage();
    page.on('pageerror',e=>report.errors.push(e.message));
    page.on('response',r=>{if(r.status()>=400)report.errors.push(`${r.status()} ${r.url()}`)});
    for (const width of [375,768,1440,1920]) {
      await page.setViewportSize({width,height:width<700?812:1000});
      await page.goto(url); await page.evaluate(()=>document.fonts.ready);
      for (let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=700) {await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(60);}
      await page.evaluate(()=>window.scrollTo(0,0));
      const state = await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.body.scrollHeight,images:[...document.images].map(i=>({src:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0,width:i.naturalWidth,height:i.naturalHeight})),overflow:[...document.querySelectorAll('h1,h2,p,figcaption,nav,a,button')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left < -1||r.right>innerWidth+1)}).map(e=>e.className||e.tagName)}));
      report.widths.push(state);
      await page.screenshot({path:path.join(__dirname,`full-${width}.png`),fullPage:true});
      await page.screenshot({path:path.join(__dirname,`cover-${width}.png`)});
    }
    await page.setViewportSize({width:375,height:812});await page.goto(url);
    await page.getByRole('navigation').getByText('Contacto').click();
    report.checks.mobileContact = await page.evaluate(()=>{const r=document.getElementById('contacto').getBoundingClientRect();return location.hash==='#contacto'&&r.top>=70&&r.top<innerHeight&&r.bottom<=innerHeight+1});
    await page.locator('#copy-number').click();
    report.checks.clipboard = await page.evaluate(()=>navigator.clipboard.readText());
    report.checks.copyStatus = await page.locator('#copy-status').textContent();
    report.checks.links = await page.evaluate(()=>[...document.querySelectorAll('a')].map(a=>({href:a.getAttribute('href'),valid:!a.getAttribute('href').startsWith('#')||!!document.querySelector(a.getAttribute('href'))})));
    report.checks.structuredData = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
    await page.goto(url);await page.keyboard.press('Tab');
    report.checks.keyboardSkip = await page.evaluate(()=>document.activeElement.className==='skip'&&getComputedStyle(document.activeElement).outlineStyle!=='none');
    await page.evaluate(()=>{Object.defineProperty(navigator,'clipboard',{value:undefined,configurable:true});document.execCommand=()=>false;});
    await page.locator('#copy-number').click();
    report.checks.manualCopy = await page.locator('#copy-manual').isVisible();
    report.checks.manualSelection = await page.locator('#phone-fallback').evaluate(e=>e.value==='636126378'&&e.selectionEnd===9);
    await page.emulateMedia({reducedMotion:'no-preference'});await page.goto(url);
    for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=500){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(100);}
    report.checks.revealComplete = await page.locator('.waiting').count()===0;
    await page.emulateMedia({reducedMotion:'reduce'});
    report.checks.reducedMotion = await page.locator('.water-window').evaluate(e=>getComputedStyle(e).animationName==='none');
    const nojs = await browser.newContext({javaScriptEnabled:false,viewport:{width:375,height:812}});
    const np = await nojs.newPage();await np.goto(url);
    report.checks.noJsContent = await np.locator('h1').isVisible() && await np.locator('.light-study img').evaluate(e=>getComputedStyle(e).clipPath==='none'||getComputedStyle(e).clipPath==='inset(0px)');
    await nojs.close();await context.close();
    fs.writeFileSync(path.join(__dirname,'results.json'),JSON.stringify(report,null,2));
    console.log(JSON.stringify(report,null,2));
    if(report.errors.length||report.widths.some(w=>w.scrollWidth>w.width||w.overflow.length||w.images.some(i=>!i.loaded))||report.checks.clipboard!=='636126378'||!report.checks.manualCopy||!report.checks.revealComplete)process.exitCode=1;
  } finally {await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});

