const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const yearEl = document.getElementById('year');

menuToggle?.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelectorAll('#menu a').forEach((anchor) => {
  anchor.addEventListener('click', () => menu.classList.remove('open'));
});

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
