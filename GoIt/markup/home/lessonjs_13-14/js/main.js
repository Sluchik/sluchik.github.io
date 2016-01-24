'usr srtict'
$(function(){

var tests =[
{
  title:'Solar system',
  questions: 'The Sixth planet of the solar system',
     answers: [
      'Jupiter',
      'Uranus',
      'Saturn',
      'Venus',
    ]
},
{
  questions: 'Moons of Mars',
  answers: [
    'Moon',
    'Phobos',
    'Callisto',
  ]
},
{
  questions: 'Who discovered Uranus',
  answers: [
    'Clyde Tombaugh',
    'Mikola Kopernik',
    'William Herschel',
  ]
},
];

localStorage.setItem('test_1', JSON.stringify(tests)); //запис обєкту в localStorage

var test =  localStorage.getItem('test_1'); // отримання обєкту з localStorage
    test = JSON.parse(test);
    console.log(test);

var $html = $('#test').html(); //.html() записує повнічтю html вміст
var $template = tmpl($html,{
  data: test
});
//tmpl - виклик шаблону
//в шаблон потрібно передавати обєет а не масив !масив не працює
$('.present').append($template);


$('.button').on('click', function(){
    $('.modal').show();
  if ( $('#checkbox02' && '#checkbox12' &&'#checkbox22').is(":checked")){
     $('.notification p').html('Congratulation! The test is passed!')
  } else {
    $('.notification p').html('Faill!')
  }

})
$('.exit').on('click', function(){
   $('input:checkbox').removeAttr('checked');
      $('.modal').hide();
})





});
