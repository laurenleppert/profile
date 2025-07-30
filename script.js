// Toggle mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close the mobile menu when a nav link is clicked (for one-page navigation)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // If the nav is open (mobile menu visible), close it after clicking a link
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});

// Update footer year automatically
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
