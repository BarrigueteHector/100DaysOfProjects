// Obtenemos la ruta actual de la página
var currentPath = window.location.pathname;

// Agregamos la clase "active" al enlace correspondiente según la página actual
var links = document.querySelectorAll('ul li a');
links.forEach(function(link) {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});