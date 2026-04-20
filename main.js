const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-nav');
const nav = document.querySelector('nav');
const svg = document.getElementById("svg-logo");
const paths = svg.querySelectorAll("path");

// CLICK HAMBURGUESA
btn.addEventListener('click', () => {
  menu.classList.toggle('show');
  nav.classList.toggle('nav-active');

  const isOpen = nav.classList.contains('nav-active');

  // 👉 activa/desactiva icono (☰ / ✕)
  btn.classList.toggle('active', isOpen);

  // 👉 color logo
  paths.forEach(path => {
    path.setAttribute("fill", isOpen ? "#FFF6EC" : "#4A2E2A");
  });
});

// CERRAR AL HACER CLICK EN LINKS
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    cerrarMenu();
  }
});

function cerrarMenu() {
  menu.classList.remove('show');
  nav.classList.remove('nav-active');

  // 👉 volver icono hamburguesa
  btn.classList.remove('active');

  // 👉 volver logo
  paths.forEach(path => {
    path.setAttribute("fill", "#4A2E2A");
  });
}

// CARDS
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});

// POPUPS
function abrirPopup(id) {
  document.getElementById(id).classList.add("show");
}

function cerrarPopup(id) {
  document.getElementById(id).classList.remove("show");
}