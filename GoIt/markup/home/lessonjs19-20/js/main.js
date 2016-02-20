
// carusel

$(document).ready(function() {

  $("#owl-demo").owlCarousel({
      wrap: 'circular',
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
       autoPlay: true,
       afterMove:	true

  });

});
