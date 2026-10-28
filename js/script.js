'use strict';
const photos = (window.CANITOS_PHOTOS || []).filter(p => p.src && p.alt);
const gallery = document.querySelector('#gallery');
const dialog = document.querySelector('#lightbox');
let current = 0, opener = null, touchStart = null;
function showPhoto(index) {
  current = (index + photos.length) % photos.length;
  const photo = photos[current];
  const image = document.querySelector('#large-photo');
  image.src = photo.src; image.alt = photo.alt;
  document.querySelector('#large-caption').textContent = photo.caption || photo.alt;
  document.querySelector('#photo-position').textContent = `${current + 1} / ${photos.length}`;
}
function openPhoto(index, button) {
  opener = button; showPhoto(index); dialog.showModal(); document.body.classList.add('modal-open');
  dialog.querySelector('.close').focus();
}
if (photos.length) {
  gallery.replaceChildren();
  photos.forEach((photo, index) => {
    if (photo.cover) return;
    const button = document.createElement('button'); button.type = 'button'; button.className = 'photo-button';
    button.setAttribute('aria-label', `Agrandar: ${photo.caption || photo.alt}`);
    const image = document.createElement('img'); image.src = photo.src; image.alt = photo.alt; image.loading = 'lazy';
    const caption = document.createElement('span'); caption.textContent = photo.caption || photo.alt;
    button.append(image, caption); button.addEventListener('click', () => openPhoto(index, button)); gallery.append(button);
  });
  document.querySelector('#album-note').textContent = 'Una mirada a los exteriores. Pulsa una imagen para ampliarla y recorre el álbum con las flechas o deslizando.';
  document.querySelector('.album-foot > span').textContent = 'Fotografías de los exteriores.';
  const cover = photos.find(p => p.cover);
  if (cover) {
    const figure = document.querySelector('#cover-photo'); figure.querySelector('.pending')?.remove(); figure.querySelector('img')?.remove();
    const img = document.createElement('img'); img.src = cover.src; img.alt = cover.alt; img.fetchPriority = 'high';
    img.width = 1024; img.height = 768; figure.prepend(img); figure.classList.add('has-photo'); document.querySelector('#cover-caption').textContent = cover.caption || cover.alt;
  }
}
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.querySelector('.previous').addEventListener('click', () => showPhoto(current - 1));
dialog.querySelector('.next').addEventListener('click', () => showPhoto(current + 1));
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); opener?.focus(); });
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(current + 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(current - 1); }
});
dialog.addEventListener('touchstart', event => { touchStart = event.changedTouches[0].clientX; }, {passive:true});
dialog.addEventListener('touchend', event => {
  if (touchStart === null) return;
  const delta = event.changedTouches[0].clientX - touchStart;
  if (Math.abs(delta) > 55 && photos.length > 1) showPhoto(current + (delta < 0 ? 1 : -1));
  touchStart = null;
}, {passive:true});
const motion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('photo-enter'); observer.unobserve(entry.target); }
  }), {threshold:.12});
  document.querySelectorAll('.photo-slot,.photo-button').forEach(element => observer.observe(element));
}
document.querySelector('#copy-number').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('636126378');
    document.querySelector('#copy-status').textContent = 'Teléfono copiado: 636 126 378.';
  } catch {
    const manual = document.querySelector('#copy-manual'); manual.hidden = false;
    const input = document.querySelector('#phone-fallback'); input.focus(); input.select(); input.setSelectionRange(0, input.value.length);
    document.querySelector('#copy-status').textContent = 'Puedes copiar el teléfono seleccionado.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
