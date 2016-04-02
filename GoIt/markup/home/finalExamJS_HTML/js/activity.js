
function render(data){
 $('.holiday_activity__content').empty();
   var $html = $('#holiday_activity').html();
   var $template = tmpl($html,{
        data: data
  });
   $('.holiday_activity__content').append($template);

   $('.grid').isotope({
                   itemSelector: '.grid-item',
                   layoutMode: 'masonry'
               });
  }

$(function() {

function httprRequest(e){
  if(e){
    e.preventDefault();
  }
    var size;
    var search;
    var scrinsize = screen.width;
    if(scrinsize <= 460){
      size = 's';
    } else{
        size = 'm';
    }
    if($('.search__input').val().length == 0){
         search = '';
    } else{
        search = $('.search__input').val();
    }
    var $url = 'http://api.pixplorer.co.uk/image?word='+search +'&amount=7&size='+size;
    $('.search__input').val(" ");
    $.ajax({
        url: $url,
        metod: 'GET',
        dataType: 'json',
        cache: false,
        beforeSend: function () {
        $('.holiday_activity__content').html(' ');
               var spiner = '<p style="text-align:center;"><img src="img/speener.gif" align="middle" width="100px" height="100px" alt=""></p>'
               $('.holiday_activity__content').append(spiner);
           },
           complete: function () {
           },
        success: function (data) {
        render(data);
        }
      })
 }

 $('#search__button').on('click', httprRequest);
 $('#target').submit(httprRequest);

httprRequest();



})
