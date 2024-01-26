//FUNCION DEL BOTON SUBIR ARRIBA
$(document).ready(function(){
  $('.up').hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 100 ){
      $('.up').fadeIn('1000');
    } else {
      $('.up').fadeOut('1000');
    }
  });

  $('.up').click(function(){
    $('body, html').animate({
        scrollTop: 0
    },150);
    //$('#accordionFlushExample .accordion-collapse').collapse('hide'); //cierra el acordeon al presionar el boton subir

  });

});

//FUNCION QUE AL HACER CLICK EN LA IMAGEN ME LLEVE HASTA EL ACORDEON
function mover(){
  $('body, html').animate({
    scrollTop: $('#accordionFlushExample').position().top
},150);
}

//FUNCION ACORDEON DEJA DE SER VISIBLE SE CIERRE
$(document).ready(function () {
  // Función para cerrar el acordeón si no está visible
  function cerrarAcordeonSiNoVisible() {
    var acordeon = $('#accordionFlushExample');

    // Obtener la posición del acordeón
    var acordeonPos = acordeon.offset().top;

    // Obtener la altura del acordeón
    var acordeonAltura = acordeon.outerHeight();

    // Calcular la posición y altura del área visible de la ventana
    var ventanaSuperior = $(window).scrollTop();
    var ventanaInferior = ventanaSuperior + $(window).height();

    // Verificar si el acordeón ha salido completamente de la vista
    if (acordeonPos + acordeonAltura < ventanaSuperior || acordeonPos > ventanaInferior) {
      // Cerrar el acordeón
      acordeon.find('.accordion-collapse').collapse('hide');
    }
  }
  // Verificar cuando se carga la página y al hacer scroll
  $(window).on('load scroll', function () {
    cerrarAcordeonSiNoVisible();
  });
});

//FUNCION DE CARUSEL AUTOMATICO
  $(document).ready(function () {
    // Inicializar el carrusel
    $('#miCarrusel').carousel();

    // Configurar el carrusel para que se mueva automáticamente cada 3 segundos
    setInterval(function () {
      $('#miCarrusel').carousel('next');
    }, 3000);
  });

  $(document).ready(function () {
    var menuContainer = $('.menu.container');

    $(window).scroll(function () {
        console.log('Scrolling...');
        if ($(window).scrollTop() > 0) {
            menuContainer.addClass('scrolled');
            console.log('Se añadió la clase "scrolled"');
        } else {
            menuContainer.removeClass('scrolled');
            console.log('Se quitó la clase "scrolled"');
        }
    });
});

/*
  //FUNCION QUE AGREGA EL FONDO EN EL NAVBAR
  $(document).ready(function () {
    var menuContainer = $(".menu.container");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            menuContainer.addClass("scrolled");
        } else {
            menuContainer.removeClass("scrolled");
        }
    });
});
*/


