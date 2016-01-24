/*===================drop-down menu======================*/
/*
$(function() {
   var $links = $('.menu a');
   var $submenu = $('.submenu');
   var $sub_submenu = $('.submenu a');

    $links.mouseenter(function() {
     var $curentsubmenu = $(this).siblings('.submenu');
     $curentsubmenu.slideDown('slow');

   });
   $submenu.mouseleave(function(){
       $submenu.slideUp('slow');
   });

   $sub_submenu.mouseenter(function() {
    var $curent_sub_submenu = $(this).siblings('.sub_submenu');
    $curent_sub_submenu.show('fast');
  });

  $sub_submenu.mouseleave(function(){
          var $curent_sub_submenu = $(this).siblings('.sub_submenu');
          $curent_sub_submenu.hide('fast');
  });

  });
*/
$(function() {
  $('.menu li').hover(function(){
 	 	$(this).children('ul').stop(false, true).slideToggle(300);
 	});

  $('.submenu li').on('mouseover', function(){
		$(this).addClass('active');
	});
	$('.submenu li').on('mouseout', function(){
		$(this).removeClass('active');
	});
});

  /*===================drop-down menu======================*/


/*==================jCarusel==============*/

(function($) {

    $(function() {
        var jcarousel = $('.jcarousel');
          jcarousel.jcarousel({
            animation: 'slow'
        })
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                    carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });
          jcarousel.jcarouselAutoscroll({
            interval: 6000,
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

/*======================select====================================*/
(function($) {
  $(function() {
      $(".chosen-select").chosen({width: "100%"});
  });
})(jQuery);
/*======================end select====================================*/
