
function myMethod(data){
   $('.holiday_activity').empty();
   var $html = $('#holiday_activity').html();
   var $template = tmpl($html,{
        data: data
  });
   $('.holiday_activity').append($template);
  }

$(function() {
function httprRequest(e){
    // e.preventDefault();
    var scrinsize;
    var size;
    var search;
     scrinsize = screen.width;
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
    var $url = 'http://api.pixplorer.co.uk/image?word='+search +'&amount=6&size='+size;
    $('.search__input').val(" ");
    $.ajax({
        url: $url,
        metod: 'GET',
        dataType: 'json',
        success: function (data) {
        myMethod(data);
        }
      })
 }

 $('#search__button').on('click', httprRequest);
 $('#target').submit(httprRequest);

httprRequest();
})
