// assets/js/countdown.js
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("countdown");
  if (!el) return;

  // TODO: set your real graduation date here
  const gradDate = new Date("November 20, 2026 00:00:00");

  function update() {
    const now = new Date();
    const diff = gradDate - now;
    if (diff <= 0) {
      el.textContent = "🎓 Graduation day!";
      return;
    }
    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins  = Math.floor((diff / (1000 * 60)) % 60);
    el.textContent = `${days} days, ${hours} hours, ${mins} mins until graduation 🎓`;
  }

  update();
  // Update every minute (good enough; avoids constant ticking)
  const timer = setInterval(update, 60 * 1000);

  // Optional: stop after grad
  window.addEventListener("beforeunload", () => clearInterval(timer));
});
