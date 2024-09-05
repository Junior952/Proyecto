// Detectar el evento de desplazamiento para cambiar el tamaño del header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
