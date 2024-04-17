$(document).ready(function() {
    // Cuando el mouse entra en el contenedor de la tarjeta
    $('.card').mouseenter(function() {
        // Aumentar el tamaño del contenedor con una animación
        $(this).animate({ width: '+=20px', height: '+=20px' }, 'fast');
    });
    
    // Cuando el mouse sale del contenedor de la tarjeta
    $('.card').mouseleave(function() {
        // Revertir el tamaño del contenedor con una animación
        $(this).animate({ width: '-=20px', height: '-=20px' }, 'fast');
    });
});

// Función para cambiar el color de fondo al pasar el mouse sobre un elemento de la lista
$(document).ready(function(){
    $('.list-group-item').hover(
        function(){
            $(this).css('background-color', 'red');
        },
        function(){
            $(this).css('background-color', '');
        }
    );
});

$(document).ready(function(){
    // Al hacer scroll
    $(window).scroll(function() { 
        // Si la posición actual del scroll es mayor que 100px (por ejemplo), añade la clase "scrolled" al navbar
        if ($(this).scrollTop() > 100) { 
            $('.navbar').addClass('scrolled');
        } 
        // Si la posición actual del scroll es menor que 100px, quita la clase "scrolled" del navbar
        else {
            $('.navbar').removeClass('scrolled');
        }
    });
});

