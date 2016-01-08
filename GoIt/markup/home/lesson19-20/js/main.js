(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

          jcarousel.jcarouselAutoscroll({
            interval: 4000,
            target: '+=1',
            autostart: true
        });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);

// select
  $(function() {
      $(".chosen-select").chosen({width: "100%"});
  });

//menu
$(function() {
    var $links = $('.menu a');
    // $links.on('click', function(e){
    //   var $sabmenu = $(this).siblings('.submenu');
    //     e.preventDefault();
    //   console.log($sabmenu);
    //   $sabmenu.show();
    // })

    $links.hover(function() {
     var $sabmenu = $(this).siblings('.submenu');
      $sabmenu.show();
 }, function() {
     var $sabmenu = $(this).siblings('.submenu');
       $sabmenu.hide();
 });
});
