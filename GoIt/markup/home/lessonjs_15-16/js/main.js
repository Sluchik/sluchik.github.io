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
      metod: 'GET',
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

function Humen(params) {
  this.firstName = params.firstName;
  this.lastName =  params.lastName;
  this.age = params.age;
  this.sex = params.sex;
  this.height = params.height;
  this.weight = params.weight;
}

function Worker(params, workParams){
  Humen.apply(this, arguments);
  this.workPlace = workParams.workPlace;
  this.salary = workParams.salary;
}

function Student(params,  studyPlace, grants) {
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
//
// Student.prototype = Object.create(Humen.prototype);
// Student.prototype.see = function () {
//    console.log('I like Game of the Trons');
// }
var andrii = new Worker({
  firstName: 'Andrii',
  lastName: 'Sloochik',
  age: 26,
  height: 182,
  weight: 72,
  sex: 'maile'
},
{
  workPlace: 'ArtBrains',
  salary: 400
}
);
  console.log(andrii);
  andrii.introduse();
  andrii.work();

var sergii = new Worker({
    firstName: 'Sergii',
    age: 22,
    height: 178,
    weight: 70,
    sex: 'maile'
  },
  {
    workPlace: 'GB',
    salary: 350
  }
  );
    console.log(sergii);
  sergii.introduse();
    sergii.work();
//
//   andrii.work();
// var petro = new Student('Petro', 'Parasuk', 24, 'mail', 182, 72, 'LP', 2000);
//   console.log(petro);
//   petro.see();

// proto







// для підримки ie8 and low
var animal = {
  canRun: true
}
var vatrushka = Object.create(animal);
console.log(vatrushka);

function inherit(proto){
  function F(){};
  F.prototype = proto;
  return new F;
};

var vatrushka2 = inherit(animal);
console.log(vatrushka2);

});




["Lean-Case Profile", "P&L Summary", "Cash Flow Scenarios", "Single Unit Dashboard", "Single Unit Summary", "Single Unit - Analysis", "Add Units", "All Units Summary", "All Units - Analysis", "Existing Business", "Opex - View Opex Charts"]
