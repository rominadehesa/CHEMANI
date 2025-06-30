const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu-nav');

  btn.addEventListener('click', () => {
    menu.classList.toggle('show');
  });