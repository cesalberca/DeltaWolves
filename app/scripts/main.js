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
          slidesToScroll: 1
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
     content: $('<div><h3>Fuerza de ventas</h3><p>Nos dedicaremos a solventar sus problemas relacionados con el departamento comercial, asesorando y ayudando a dictaminar qué recursos humanos y materiales proveer o establecer.</p></div>'),
  });

  $('#gestoria').tooltipster({
      content: $('<div><h3>Gestoría</h3><p>Si necesitas más tiempo para hacer lo que un líder hacer, déjanos a nosotros las tareas administrativas y los trámites.</p></div>')
  });

  $('#dep-comercial').tooltipster({
     content: $('<div><h3>Departamento Comercial</h3><p>La parte más difícil de una empresa es vender, bien, nosotros nos encargamos que todo vaya como la seda, asesorando para que tu <strong>departamento comercial</strong> funcione como debe ser.</p></div>')
  });

  $('#coaching').tooltipster({
      content: $('<div><h3>Coaching</h3><p>Muchas veces lo que las empresas necesitan es un empujón, nosotros te lo damos en la dirección correcta, pues la <strong>motivación</strong> es un activo de mucho valor.</p></div>')
  });

  $('#tec-venta').tooltipster({
     content: $('<div><h3>Técnica de venta</h3><p>Quizás tu empresa tiene un gran producto, un equipo impresionante y el mercado de venta perfecta, pero si no tiene los <strong>procesos</strong>, la <strong>técnica</strong> o la <strong>experiencia</strong> será un duro revés para tu compañía. Nosotros lo solventamos.</p></div>')
  });

  $('#auditoria').tooltipster({
     content: $('<div><h3>Auditoría</h3><p>¿Hay algo que falla? ¿No sabes el qué? Traer una perspectiva nueva de mano de <strong>profesionales</strong> puede descubrir los errores cometidos y ayudar a solucionarlos.</p></div>')
  });

  $('#consultoria').tooltipster({
     content: $('<div><h3>Consultoría</h3><p>Saber por dónde avanzar y de qué forma, es <strong>vital</strong> para la vida de tu empresa. Nosotros estamos aquí para guiarte.</p></div>')
  });

  $('#emprendedores').tooltipster({
     content: $('<div><h3>Emprendedores</h3><p>Tienes ese alma de emprendedor, lo sabemos, pero sin experiencia alguna las posibilidades de éxito merman. Deja que nosotros te ayudemos a poner tu idea en acción. Te ayudamos con el <strong>plan de negocio</strong>, su <strong>desarrollo</strong> y además te buscamos <strong>inversor</strong>.</p></div>')
  });

  $('#proveedores').tooltipster({
     content: $('<div><h3>Proveedores</h3><p>De haber lidiado con muchos proveedores sabemos sacar lo mejor de un acuerdo. Si crees que tu relación profesional con tus proveedores no es acorde a tus objetivos, </p></div>')
  });

  $('#diseñoweb').tooltipster({
     content: $('<div><h3>Diseño Web</h3><p>¿Te gusta lo que ves? Imagínate la cantidad de clientes que estás perdiendo por no tener un escaparate a internet en condiciones. Nosotros llevamos a cabo el diseño de tu web.</p></div>')
  });

  $('#business-plan').tooltipster({
    content: $('<div><h3>Plan de negocio</h3><p>El documento más importante de tu empresa es el <strong>plan de negocio</strong>, y por tanto su calidad debe ser equiparable a su importancia. Te echamos una mano desde su concepción hasta su finalización.</p></div>')
  });

  $('#fincas').tooltipster({
    content: $('<div><h3>Administración de fincas</h3><p>¿Quieres olvidarte de los pormenores de tu finca pero sin descuidar los trámites y el papeleo? Te proporcionaremos la seguridad de saber que cuentas con alguien que sabe encargarse de administrar tu finca.</p></div>')
  });

});

var plan = require('flightplan');

// configuration
plan.target('production', [
  {
    host: 's575161373.mialojamiento.es',
    username: 'u80820258',
    port: 2222,
    agent: process.env.SSH_AUTH_SOCK
  },
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '~/www/');
});
