'use strict';


$( document ).ready(function() {

  $(window).scroll(function () {
    $('.sect').each(function () {
        var w = $(window).scrollTop();
        var t = $(this).offset().top - 100;
        if (w > t) {
            $('header').css({
                'background-color': $(this).css('background-color')
            });
        }
    });
});

  // Skrollr
  /*globals skrollr, scrollReveal */
  skrollr.init({
    forceHeight: false

  });

  window.sr = new scrollReveal();

  //Carousel
  $('#slick').slick({
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });


  //#2 Carousel
  $('#image-slider').slick({
    slidesToScroll: 1,
  });

  //Global setting for tooltipster
  $.fn.tooltipster('setDefaults', {
    position: 'bottom',
    maxWidth: 300,
    trigger: 'hover',
    interactive: true,
  });

  //Tooltipster
  $('#fuerza-de-ventas').tooltipster({
     content: $('<div><h3>Fuerza de ventas</h3><p>Si quieres externalizar la venta de tu producto, te presentaremos un departamento comercial acorde a tus necesidades. Pídenos presupuesto sin compromiso.</p></div>'),
  });

  $('#gestoria').tooltipster({
      content: $('<div><h3>Gestoría</h3><p>Si necesitas más tiempo para hacer lo que un líder debe hacer, déjanos a nosotros las tareas administrativas y los trámites. El tiempo en una empresa se transforma en beneficios si sabemos canalizarlo. No dejes que tareas propias de un gestor las realice personal poco cualificado, puede significar una herida abierta en la empresa que cause daños irreparables.</p></div>')
  });

  $('#dep-comercial').tooltipster({
     content: $('<div><h3>Departamento Comercial</h3><p>La parte más difícil de una empresa es vender y vender bien. Si no dispones de <strong>deparamento comercial</strong>, te ayudaremos en la creación de uno competitivo. Realizando las labores de RRHH y asumiendo el tutelaje en sus primeros pasos. Posteriormente nos encargamos de la supervisión para que cumplan con los objetivos marcados. Si ya dispones de <strong>deparamento comercial</strong>, detectamos cuáles son sus necesidades y redactaremos un informe de mejoras para que tú, como nuestro cliente, valores la posibilidad de un cambio que genere los ingresos que necesitas.</p></div>')
  });

  $('#coaching').tooltipster({
      content: $('<div><h3>Coaching</h3><p>La <strong>motivación</strong> es un activo de mucho valor. El departamento comercial a veces sufre desmotivación y se traduce en una bajada de los beneficios. Déjanos que te ayudemos motivando de nuevo a tu equipo. Ofrecemos resultados a corto plazo.</p></div>')
  });

  $('#tec-venta').tooltipster({
     content: $('<div><h3>Técnica de venta</h3><p>Quizás tu empresa tiene un gran producto, un equipo impresionante y el mercado de venta perfecta. Pero si no tiene los <strong>procesos</strong>, la <strong>técnica</strong> o la <strong>experiencia</strong> será un duro revés para tu compañía. Nosotros lo solventamos, aplicando nuevas técnicas de venta o elaborando un guión específico si fuera necesario.</p></div>')
  });

  $('#auditoria').tooltipster({
     content: $('<div><h3>Auditoría</h3><p>¿Hay algo que falla? ¿No sabes qué? Traer una perspectiva nueva de mano de <strong>profesionales</strong> puede descubrir los errores cometidos y ayudar a solucionarlos. Auditamos los sueños que no has podido cumplir.</p></div>')
  });

  $('#consultoria').tooltipster({
     content: $('<div><h3>Consultoría</h3><p>Saber por dónde avanzar y de qué forma, es vital para la vida de tu empresa. Nosotros estamos aquí para guiarte. Quizás el estado actual de tus cuentas, no sea el adecuado para obtener los beneficios que esperas. Expertos en economía valorarán tu inversión para que repercuta directamente en beneficios.</p></div>')
  });

  $('#emprendedores').tooltipster({
     content: $('<div><h3>Emprendedores</h3><p>Tienes ese alma de emprendedor, lo sabemos, pero sin experiencia alguna las posibilidades de éxito merman. Deja que nosotros te ayudemos a poner tu idea en acción. Te ayudamos con el <strong>plan de negocio</strong>, su <strong>desarrollo</strong> y además te buscamos <strong>inversor</strong>.</p></div>')
  });

  $('#proveedores').tooltipster({
     content: $('<div><h3>Proveedores</h3><p>La calidad no está reñida con un buen precio. Conocemos las tres bes. Bueno, bonito y barato. Por eso te ofrecemos la posibilidad de evaluar a tus proveedores consiguiendo mejores precios de los que tengas actualmente.</p></div>')
  });

  $('#diseñoweb').tooltipster({
     content: $('<div><h3>Diseño Web</h3><p>Imagina la cantidad de clientes que puedes estar perdiendo, porque tu escaparate en internet no es el adecuado. Deja en manos de profesionales el diseño de tu web. Podemos hacerla a medida, con un bajo coste y un alto rendimiento.</p></div>')
  });

  $('#business-plan').tooltipster({
    content: $('<div><h3>Plan de negocio</h3><p>El documento más importante de tu empresa es el <strong>plan de negocio</strong>, y por tanto su calidad debe ser equiparable a su importancia. Te ayudamos desde su concepción hasta su finalización</p></div>')
  });

  $('#fincas').tooltipster({
    content: $('<div><h3>Administración de fincas</h3><p>¿Quieres olvidarte de los pormenores de tu finca pero sin descuidar los trámites y el papeleo? Te proporcionaremos la seguridad de saber que cuentas con alguien que sabe encargarse de administrar tu finca, con la fiabilidad de años de experiencia. Proporcionamos referencias de usuarios y departamento jurídico encargado de los morosos.</p></div>')
  });

});

var lastId,
    topMenu = $('#header'),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find('a'),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr('href'));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr('href'),
      offsetTop = href === '#' ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : '';

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass('active')
         .end().filter('[href=#'+id+']').parent().addClass('active');
   }
});
