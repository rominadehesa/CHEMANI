const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-nav');
const nav = document.querySelector('nav');
const svg = document.getElementById("svg-logo");
const paths = svg.querySelectorAll("path");
const links = menu.querySelectorAll('li');

btn.addEventListener('click', () => {
  menu.classList.toggle('show');
  nav.classList.toggle('nav-active');

  if (nav.classList.contains('nav-active')) {
    // activo → blanco
    paths.forEach(path => {
      path.setAttribute("fill", "#FFF6EC");
    });
  } else {
    paths.forEach(path => {
      path.setAttribute("fill", "#4A2E2A");
    });
  }
});

links.forEach(link => {
  link.addEventListener('click', cerrarMenu);
});

function cerrarMenu() {
  menu.classList.remove('show');
  nav.classList.remove('nav-active');
}

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});

function abrirPopup(id) {
    document.getElementById(id).classList.add("show");
}

function cerrarPopup(id) {
    document.getElementById(id).classList.remove("show");
}
