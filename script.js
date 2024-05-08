document.addEventListener("DOMContentLoaded", function() {
    // Obtener el checkbox de la hamburguesa y el menú
    var checkbox = document.getElementById("check");
    var menu = document.querySelector(".menu");

    // Agregar un evento clic al checkbox de la hamburguesa
    checkbox.addEventListener("click", function() {
        // Toggle (alternar) la clase 'activo' en el menú
        menu.classList.toggle("activo");
    });

    // Obtener todos los enlaces del menú
    var enlacesMenu = document.querySelectorAll(".menu a");

    // Iterar sobre cada enlace del menú
    enlacesMenu.forEach(function(enlace) {
        // Agregar un evento clic a cada enlace del menú
        enlace.addEventListener("click", function() {
            // Si el menú está activo (abierto), cerrarlo
            if (menu.classList.contains("activo")) {
                menu.classList.remove("activo");
                checkbox.checked = false;
            }
        });
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Redirigir automáticamente a la página de inicio
    window.location.href = 'tu_pagina_de_inicio.html';

    // Limpiar los valores de los campos de entrada
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('mensaje').value = '';

    // Prevenir el envío normal del formulario
    event.preventDefault();
});
