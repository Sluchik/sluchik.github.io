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


$(function(){

function Humen(firstName, lastName, age, sex, height, weight) {
  this.firstName = firstName;
  this.lastName =  lastName;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
}

function Worker(firstName, lastName, age, sex, height, weight, workPlace, salary){
  Humen.apply(this, arguments);
  this.workPlace = workPlace;
  this.salary = salary;
}

function Student(firstName, lastName, age, sex, height, weight,  studyPlace, grants) {
  Humen.apply(this, arguments);
  this.studyPlace = studyPlace;
  this.grants = grants;
}

Humen.prototype.introduse = function(){
  console.log('Hi I am '+ this.firstName + ' ' + this.lastName);
}

Worker.prototype = Object.create(Humen.prototype);
Worker.prototype.work = function() {
  console.log('I am wrorking');
}

Student.prototype = Object.create(Humen.prototype);
Student.prototype.see = function () {
   console.log('I like Game of the Trons');
}
var andrii = new Worker('Andrii', 'Sloochik', 26, 'mail', 182, 72, 'ArtBrains', 'QA');
  console.log(andrii);
  andrii.work();
var petro = new Student('Petro', 'Parasuk', 24, 'mail', 182, 72, 'LP', 2000);
  console.log(petro);
  petro.see();
});
