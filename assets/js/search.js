// assets/js/search.js
document.addEventListener('DOMContentLoaded', () => {
  const form  = document.getElementById('site-search');
  if (!form) return;

  const input = form.querySelector('input[name="q"]');

  form.addEventListener('submit', (e) => {
    const q = (input.value || '').trim();
    if (!q) { e.preventDefault(); return; }

    // Build "site:domain query" automatically
    const host = (location.hostname || '').replace(/^www\./, '');
    if (host) {
      input.value = `site:${host} ${q}`;
    } else {
      // running locally (file://) — optionally set your domain manually:
      // input.value = `site:yourdomain.com ${q}`;
      input.value = q; // plain web search
    }
  });
});
