function GoogleCallback(jqueryObj, data){

  var $html = $('#template').html();
  var $template = tmpl($html,{
      data: data
});
 $('.present').append($template);
  console.log('data', data);
}



$(function(){

function httprRequest(e){
  event.preventDefault();
  $('.present').html("");
  var $search = encodeURIComponent($('#searcData').val())
  var $url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ $search +'&callback=GoogleCallback&context=?';
  $.ajax({
      url: $url,
      dataType: 'jsonp',
      // metod: 'POST',
      success: function (data) {
        console.log('works');
      }
    })
}

$('#button').on('click', httprRequest);
$('#target').submit(httprRequest);
})





















// home work part 2
/*

$(function(){

function Humen(name, age, sex, he, weight){
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.he = he;
  this.weight = weight;
}
function Worker (job, salary){
  Humen.call(this);
  this.job = job;
  this.salary = salary;
}


Worker.prototype.work = function(){
  console.log('I am working');
}

var andrii = new Worker({
  name: 'Andrii',
  age: 18,
  sex: 'mail',
  he: 182,
  weight: 72,
  job: 'Dev',
  salary: 2000
}) ;

console.log(andrii.name);
});
*/
