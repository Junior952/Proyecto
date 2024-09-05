// Detectar el evento de desplazamiento para cambiar el tamaño del header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});



// Primer carrusel
const primaryCarousel = document.querySelector('.carousel-container .carousel'); // Selecciona el primer carrusel
const primaryImages = document.querySelectorAll('.carousel-container .carousel img');
let primaryIndex = 0;

function showNextPrimaryImage() {
    primaryIndex++;
    if (primaryIndex >= primaryImages.length) {
        primaryIndex = 0;
    }
    const primaryOffset = -primaryIndex * 400; // Cambia de imagen desplazando 400px
    primaryCarousel.style.transform = `translateX(${primaryOffset}px)`; // Usar comillas invertidas para interpolación
}

setInterval(showNextPrimaryImage, 2000); // Cambia cada 2 segundos

// Segundo carrusel
const secondaryCarousel = document.querySelector('.secondary-carousel-container .carousel'); // Selecciona el segundo carrusel
const secondaryImages = document.querySelectorAll('.secondary-carousel-container .carousel img');
let secondaryIndex = 0;

function showNextSecondaryImage() {
    secondaryIndex++;
    if (secondaryIndex >= secondaryImages.length) {
        secondaryIndex = 0;
    }
    const secondaryOffset = -secondaryIndex * 480; // Cambia de imagen desplazando 400px
    secondaryCarousel.style.transform = `translateX(${secondaryOffset}px)`; // Usar comillas invertidas para interpolación
}

setInterval(showNextSecondaryImage, 4000); // Cambia cada 2 segundos


window.addEventListener('scroll', function() {
    const seccion = document.querySelector('.seccion-imagenes');
    const posicionSeccion = seccion.getBoundingClientRect().top;
    const posicionPantalla = window.innerHeight / 1.5;
  
    if(posicionSeccion < posicionPantalla) {
      seccion.classList.add('en-vista');
    } else {
      seccion.classList.remove('en-vista');
    }
  });

