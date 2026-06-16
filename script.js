// Desplazamiento suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(ancla => {
    ancla.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Cambio de fondo de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 252, 247, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    } else {
        header.style.background = 'rgba(255, 252, 247, 0.95)';
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
    }
});
