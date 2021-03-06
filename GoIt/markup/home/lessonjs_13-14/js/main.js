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
    ],
    rightAnswer: [0, 0, 1, 0]

},
{
  questions: 'Moons of Mars',
  answers: [
    'Moon',
    'Phobos',
    'Deimos',
    'Callisto',
  ],
    rightAnswer: [0, 1, 1, 0]


},
{
  questions: 'Who discovered Uranus',
  answers: [
    'Clyde Tombaugh',
    'Mikola Kopernik',
    'William Herschel',
  ],
  rightAnswer: [0, 0, 1]

},
{
  questions: 'Who discovered Pluton ',
  answers: [
    'Clyde Tombaugh',
    'Mikola Kopernik',
    'William Herschel',
  ],
  rightAnswer: [1, 0, 0]

},
];

localStorage.setItem('test_1', JSON.stringify(tests)); //запис обєкту в localStorage

var test =  localStorage.getItem('test_1'); // отримання обєкту з localStorage
    test = JSON.parse(test);
    // console.log(test);

// сreare template

var $html = $('#test').html(); //.html() записує повнічтю html вміст
var $template = tmpl($html,{
    data: test
});

//tmpl - виклик шаблону
//в шаблон потрібно передавати обєет а не масив !масив не працює
$('.present').append($template);

function persentCorrectanswers(localAnswers, userAnswers ){
  var total = (100/localAnswers)*userAnswers;
  return total
}

function CheckAnswers(){

var $listanswers = 0;
var counter = 0;
var wroungcounter = 0;
var $totalpersent;

for(var i = 0; i < test.length; i++){

   var $userAnswes = $('.block_answer' +i+' input:checkbox');
   var $userAnswestext = $('.block_answer' +i+' p');

        for (var j = 0; j <  test[i].rightAnswer.length; j++) {

          var $inputs = $userAnswes[j].checked;
          var $text = $userAnswestext[j];
          var $textinputs = $userAnswes[j];
          var $localAnswer = test[i].rightAnswer[j];

            if($localAnswer){
              $listanswers++ //записує скільки правильних відповідей
            }
           if($inputs){

           if (($inputs == $localAnswer)){
             counter++; // рахує правельні відповіді юзера
           } else {
             wroungcounter++; //рахує кількість не вірних відповідей
         }
       }
     }

}
  if($listanswers == counter && wroungcounter == 0){
    $('.notification').append('<h6>Congratulation! The test is passed!</h6>');
    $('.notification h6').css({
      color:'green'
    });
  } else {
    $('.notification').append('<h6>Fail! Try again.</h6>');
    $('.notification h6').css({
      color:'red'
  });

  }
  $('.modal').show();
  $('.meseg').show().animate();

  $percent = persentCorrectanswers($listanswers, counter);
  //$totalpersent = (100/$listanswers)*counter;
  $('.notification').append('<p>Corect answers: '+ counter + ' from '+ $listanswers+  '</p>' + '<p>Wrong answers: '+ wroungcounter +'</p>'+ '<p>Percent correct answers: ' + $percent + '%</p>');

}


$('.button').on('click',CheckAnswers);
$('.exit').on('click', function(){
   $('input:checkbox').removeAttr('checked');
   location.reload();
   $('.notification').html('');
   $('.modal').hide();
 })

});
