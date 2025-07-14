document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");

  // ✅ Default to dark mode
  document.body.classList.add("dark");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
