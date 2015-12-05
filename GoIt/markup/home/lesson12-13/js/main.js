

/*

var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

var title = document.createElement('h3');
title.innerHTML = 'Тест по програмуванню'
wrapper.appendChild(title);

//boxOfquestions 1
var boxQuestions = document.createElement('div');
boxQuestions.classList.add('boxOfquestions');
wrapper.appendChild(boxQuestions);

//questions
var questions = document.createElement('h5');
 questions.innerHTML = '1. Питання №1';
 boxQuestions.appendChild(questions);
// answer_1
var answer_1 =  document.createElement('div');
answer_1.classList.add('checkbox');
boxQuestions.appendChild(answer_1);

var check = document.createElement('input');
check.setAttribute( 'type', 'checkbox' );
answer_1.appendChild(check);

var label =  document.createElement('lable');
label.innerHTML = 'Варіант відповіді №1';
answer_1.appendChild(label);

// answer_2
var answer_2 = answer_1.cloneNode(true);
boxQuestions.appendChild(answer_2);
//answer_3
var answer_3 = answer_2.cloneNode(true);
boxQuestions.appendChild(answer_3);



//boxOfquestions 2
var boxQuestions2 =  boxQuestions.cloneNode(true);
wrapper.appendChild(boxQuestions2);

//boxOfquestions 3
var boxQuestions3 =  boxQuestions.cloneNode(true);
wrapper.appendChild(boxQuestions3);

//batton

var buttonBox = document.createElement('div');
buttonBox.classList.add('button');
wrapper.appendChild(buttonBox);

var form = document.createElement('form');
buttonBox.appendChild(form);

var button = document.createElement('button');
button.setAttribute( 'type', 'button' );
button.classList.add('btn', 'btn-default', 'btn-lg', 'btn-block');
button.innerHTML = 'Перевірити мої результати';
form.appendChild(button);

*/

var wrapper = document.createElement('div');
var title = document.createElement('h3');
var boxQuestions = document.createElement('div');
var questions = document.createElement('h5');
var answer_1 =  document.createElement('div');
var check = document.createElement('input');
var label =  document.createElement('lable');
var buttonBox = document.createElement('div');
var form = document.createElement('form');
var button = document.createElement('button');
var i = 1;

var creareQuestionsList = {
  createWraper: function(){
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);
},
  createTitle: function(text){
    title.innerHTML = text;
    wrapper.appendChild(title);
},
createboxOfquestions: function(){

    boxQuestions.classList.add('boxOfquestions');
    wrapper.appendChild(boxQuestions);

    questions.innerHTML =  i +'. Питання №'+i;
    boxQuestions.appendChild(questions);

    answer_1.classList.add('checkbox');
    boxQuestions.appendChild(answer_1);

    check.setAttribute( 'type', 'checkbox' );
    answer_1.appendChild(check);

    label.innerHTML = 'Варіант відповіді №'+i;
    answer_1.appendChild(label);

    for ( i = 1; i < 3; i++){
      var answer_n = answer_1.cloneNode(true);
      boxQuestions.appendChild(answer_n);
    };
    for(var j = 1; j < 4; j++){
      var boxQuestions_n =  boxQuestions.cloneNode(true);
      wrapper.appendChild(boxQuestions_n);
    };
},
    createButton: function(){
      buttonBox.classList.add('button');
      wrapper.appendChild(buttonBox);
      buttonBox.appendChild(form);
      button.setAttribute( 'type', 'button' );
      button.classList.add('btn', 'btn-default', 'btn-lg', 'btn-block');
      button.innerHTML = 'Перевірити мої результати';
      form.appendChild(button);
    }
};
creareQuestionsList.createWraper();
creareQuestionsList.createTitle('Тест по прогпамуванню');
creareQuestionsList.createboxOfquestions();
creareQuestionsList.createButton();









// var questions = document.createElement('dt');
// questions.innerHTML = '1. Питання №1';
// boxQuestions.appendChild(questions);
//
// var answer = document.createElement('dd');
// questions.appendChild(answer);
