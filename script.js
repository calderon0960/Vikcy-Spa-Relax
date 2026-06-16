// Suavizar desplazamiento al hacer clic en enlaces
document.querySelectorAll('a[href^="#"]').forEach(ancla => {
    ancla.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
