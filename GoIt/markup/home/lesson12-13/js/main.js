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
  createboxOfquestions: function(NuberOfblok, numberOfanswers){
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

    for ( i = 2; i <= numberOfanswers; i++){
      var answer_n = answer_1.cloneNode(true);
      label.innerHTML ='Варіант відповіді №'+i;
      // boxQuestions.appendChild(answer_n);
      boxQuestions.insertBefore(answer_n, answer_1);
    };

    for(var j = 2; j <= NuberOfblok; j++){
      var boxQuestions_n =  boxQuestions.cloneNode(true);
      questions.innerHTML =  j +'. Питання №'+j;
      // wrapper.appendChild(boxQuestions_n);
      wrapper.insertBefore(boxQuestions_n, boxQuestions);
      };
    },
    createButton: function(){
      buttonBox.classList.add('button');
      wrapper.appendChild(buttonBox);
      buttonBox.appendChild(form);
      button.setAttribute( 'type', 'button' );
      button.classList.add('btn', 'btn-default');
      button.innerHTML = 'Перевірити мої результати';
      form.appendChild(button);
    }
};
creareQuestionsList.createWraper();
creareQuestionsList.createTitle('Тест по порограмуванню');
creareQuestionsList.createboxOfquestions(3,4);
creareQuestionsList.createButton();
