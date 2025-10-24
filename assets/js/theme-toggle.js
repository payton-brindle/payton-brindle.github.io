// assets/js/theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const currentTheme = localStorage.getItem("theme");

  // Apply saved theme
  if (currentTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "🌞 Light Mode";
  }

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "dark") {
      root.removeAttribute("data-theme");
      localStorage.removeItem("theme");
      toggleBtn.textContent = "🌙 Dark Mode";
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "🌞 Light Mode";
    }
  });
});
