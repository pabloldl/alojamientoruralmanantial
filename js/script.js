'use strict';

document.getElementById('year').textContent = String(new Date().getFullYear());

const copyButton = document.getElementById('copy-number');
const copyStatus = document.getElementById('copy-status');
const manualCopy = document.getElementById('copy-manual');
const phoneField = document.getElementById('phone-fallback');

copyButton.addEventListener('click', async () => {
  let copied = false;
  manualCopy.hidden = true;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText('636126378');
      copied = true;
    }
  } catch { /* Continue with the local-file compatible fallback. */ }

  if (!copied) {
    manualCopy.hidden = false;
    phoneField.focus();
    phoneField.select();
    phoneField.setSelectionRange(0, phoneField.value.length);
    try { copied = document.execCommand('copy'); } catch { copied = false; }
    if (copied) {
      manualCopy.hidden = true;
      copyButton.focus({ preventScroll: true });
    }
  }
  copyStatus.textContent = copied
    ? 'Número copiado: 636 126 378'
    : 'No se pudo copiar automáticamente. El número está seleccionado para copiarlo.';
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('waiting');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal-shape').forEach(figure => {
    figure.classList.add('waiting');
    observer.observe(figure);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      document.querySelectorAll('.waiting').forEach(figure => figure.classList.remove('waiting'));
      observer.disconnect();
    }
  });
}
