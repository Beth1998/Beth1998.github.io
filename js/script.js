// Obtenemos el botón hamburguesa y el menú
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    
    // Añadimos un evento de clic al botón hamburguesa
    hamburger.addEventListener('click', function() {
        // Alternamos la clase 'show' que maneja la visibilidad del menú
        menu.classList.toggle('show');
    });
