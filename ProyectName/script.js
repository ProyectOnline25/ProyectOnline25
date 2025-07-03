const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav').querySelector('ul');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});