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

//FUNCION DE CARUSEL AUTOMATICO
$(document).ready(function() {
  $('.carrusel').each(function() {
      var $this = $(this);
      var slides = $this.find('.slide');
      var currentSlide = 0;
      var slideWidth = $this.width();

      // Configuración inicial
      slides.hide().eq(currentSlide).show();

      function showSlide(index) {
          slides.hide().eq(index).fadeIn(500);
      }

      function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      }

      setInterval(nextSlide, 4000);
  });
});

  
//FUNCION AGREGAR COLOR A LA BARRA DE ARRIBA
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

//FUNCION PARRALLAX INICIO
$(document).ready(function() {
  $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      $('.header').css('background-position', 'center ' + (scrollPosition * 0.5) + 'px');
  });
});

//FUNCION PARRALLAX HORARIO


//FUNCION PARA HACER APARECER LA LETRA CUANDO LLEGA A CIERTA ALTURA (INDEX HORARIOS)
$(document).ready(function () {
  $(window).scroll(function () {
      var contenido = $('.dias');
      var distanciaDesdeLaParteSuperior = contenido.offset().top - $(window).scrollTop();

      if (distanciaDesdeLaParteSuperior < $(window).height() * 0.6) {
          contenido.css({
              opacity: 1,
              transform: "translateY(0)"
          });
      } else {
          contenido.css({
              opacity: 0,
              transform: "translateY(20px)"
          });
      }
  });
});


/*
//FUNCION PARA HACER APARECER LA LETRA CUANDO LLEGA A CIERTA ALTURA (LLEGAR MAPA)
$(document).ready(function () {
  $(window).scroll(function () {
      var contenido = $('.info-llegar .info-content');
      var distanciaDesdeLaParteSuperior = contenido.offset().top - $(window).scrollTop();

      if (distanciaDesdeLaParteSuperior < $(window).height() * 0.5) {
          contenido.css({
              opacity: 1,
              transform: "translateY(0)"
          });
      } else {
          contenido.css({
              opacity: 0,
              transform: "translateY(20px)"
          });
      }
  });
});
*/




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


