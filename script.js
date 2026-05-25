var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
    var estaAbierto = navLinks.classList.contains('abierto');

    if (estaAbierto) {
        navLinks.classList.remove('abierto');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
    } else {
        navLinks.classList.add('abierto');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Cerrar menú de navegación');
    }
});

var header = document.getElementById('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

var enlacesNav = document.querySelectorAll('a[href^="#"]');

enlacesNav.forEach(function (enlace) {
    enlace.addEventListener('click', function (e) {
        var destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            e.preventDefault();
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

var formulario = document.getElementById('formulario-contacto');

if (formulario) {
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var nombre = document.getElementById('nombre');
        var email = document.getElementById('email');
        var fecha = document.getElementById('fecha');
        var errorNombre = document.getElementById('error-nombre');
        var errorEmail = document.getElementById('error-email');
        var errorFecha = document.getElementById('error-fecha');
        var exitoMsg = document.getElementById('exito-msg');

        var hayErrores = false;

        errorNombre.textContent = '';
        errorEmail.textContent = '';
        errorFecha.textContent = '';
        nombre.classList.remove('input-error');
        email.classList.remove('input-error');
        fecha.classList.remove('input-error');

        if (nombre.value.trim().length < 2) {
            errorNombre.textContent = 'Please enter your name (at least 2 characters).';
            nombre.classList.add('input-error');
            hayErrores = true;
        }

        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            errorEmail.textContent = 'Please enter a valid email address.';
            email.classList.add('input-error');
            hayErrores = true;
        }

        if (!fecha.value) {
            errorFecha.textContent = 'Please select a preferred date.';
            fecha.classList.add('input-error');
            hayErrores = true;
        }

        if (!hayErrores) {
            exitoMsg.textContent = '✓ Your request has been sent. We will contact you soon.';
            exitoMsg.style.color = 'green';
            formulario.reset();
        }
    });
}

var galeriaTrack = document.getElementById('galeria-track');
 
if (galeriaTrack) {
    var posicionActual = 0;
    var items = document.querySelectorAll('.galeria-item');
    var totalItems = items.length;
    var anchoItem = items[0].offsetWidth + 16; // ancho del item + gap
 
    var btnAnterior = document.getElementById('btn-anterior');
    var btnSiguiente = document.getElementById('btn-siguiente');
 
    btnSiguiente.addEventListener('click', function () {
        if (posicionActual < totalItems - 3) {
            posicionActual++;
            galeriaTrack.style.transform = 'translateX(-' + (posicionActual * anchoItem) + 'px)';
        }
    });
 
    btnAnterior.addEventListener('click', function () {
        if (posicionActual > 0) {
            posicionActual--;
            galeriaTrack.style.transform = 'translateX(-' + (posicionActual * anchoItem) + 'px)';
        }
    });
}