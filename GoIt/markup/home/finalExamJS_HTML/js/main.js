
// carusell

$(function() {


  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:4,
      autoplay:false,
      autoplayTimeout:4000,
      responsive:{
          0:{
              items:1
          }
      }
  })

var owlf = $('#firstslidre').owlCarousel();
$(".firstslider__nav--prev").click(function () {
      owlf.trigger('prev.owl.carousel');
  });

$(".firstslider__nav--next").click(function () {
      owlf.trigger('next.owl.carousel');
});

var owls = $('#secondslider').owlCarousel();
$(".secondslider__nav--prev").click(function () {
      owls.trigger('prev.owl.carousel');
  });

  $(".secondslider__nav--next").click(function () {
      owls.trigger('next.owl.carousel');
  });

  var owlt = $('#thirdslider').owlCarousel();
  $(".thirdslider__nav--prev").click(function () {
      owlt.trigger('prev.owl.carousel');
  });

  $(".thirdslider__nav--next").click(function () {
      owlt.trigger('next.owl.carousel');
  });

  $('.grid').isotope({
                  itemSelector: '.grid--item',
                  layoutMode: 'masonry'

              });
});