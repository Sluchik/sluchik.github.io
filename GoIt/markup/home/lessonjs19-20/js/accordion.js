$(function() {
var $allLinks = $('.accordion__section__title');
var $links = $('.accordion__section__title');

  $links.on('click', function(e){

  e.preventDefault()


    $links.css({
       "background-color": "#fff",
       "color": "#000",
       "background-image":"url(img/plus.png)",
       "backgroundPosition":'10px center'
     }).next('div').slideUp()

     $(this).css( {
       "background-color": "#f4b60d",
       "color": "#fff",
       "background-image":"url(img/min.png)",
       "backgroundPosition":'10px center'
      })

var $content = $(this).next('div');
    if($content.css('display') == 'none'){
    $content.slideDown()
    }
  })
})
