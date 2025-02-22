const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.toggle-btn');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});
