function GoogleCallback(jqueryObj, data){
  var $html = $('#template').html();
  var $template = tmpl($html,{
      data: data
});
 $('.present').append($template);
  console.log('data', data);
}



$(function(){

$('#button').on('click', function(){
  var ser = 'Ukraine';
  var $search = $('#searcData');
  var $url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ encodeURIComponent($search.val()) +'&callback=GoogleCallback&context=?';

  $.ajax({
    url: $url,
    dataType: 'jsonp',
    // metod: 'POST',
    success: function (data) {
      console.log('works');
    }
  })

  $('#searcData').keypress(function(e){
          if(e.which == 13){
          console.log('hi');
         }
     });
});
})
