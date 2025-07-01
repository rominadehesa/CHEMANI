const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-nav');

btn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});