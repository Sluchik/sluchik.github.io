

var taskJenerator = {
    createElement: function(params){
      var element = document.createElement(params.tagName);

          if(params.inputType){
            element.setAttribute('type', params.inputType);
           }

          if(params.forType){
              element.setAttribute('for', params.forType);
             }

          if(params.tagValue){
                element.setAttribute('value', params.tagValue);
               }
          if(params.id) {
              element.id = params.id;
             }

          if(params.className) {
             element.className = params.className;
            }

          if(params.content){
            element.innerHTML = params.content;
           }

          if(params.parentElement) {
             params.parentElement.appendChild(element);
            }
        return element;
  },

  jenerateQ: function(amountQ, amountA){
    for (var i = 1; i <= amountQ; i++) {
      this.createElement({
        tagName: 'h5',
        content: i+'. Question №'+ i,
        parentElement: form
      })

      for (var j = 1; j < amountA; j++) {
        var label = this.createElement({
          tagName: 'label',
          className:'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect',
          forType: 'checkbox-'+i+j,
          content: ' Answer №'+ j,
          parentElement: form
        })

         var checkbox = this.createElement({
            tagName: 'input',
            inputType: 'checkbox',
            className:'mdl-checkbox__input',
            id:'checkbox-'+i+j,
          })
          label.insertAdjacentElement('afterBegin', checkbox);
      }
    };
  }
}
var body = document.querySelector('body');

var wrapper = taskJenerator.createElement({
  tagName:'div',
  className: 'wrapper',
  parentElement: body
});

taskJenerator.createElement({
  tagName:'h3',
  className: 'title ',
  content: 'Software Testing',
  parentElement: wrapper
});

var form = taskJenerator.createElement({
  tagName:'form',
  parentElement: wrapper
});
taskJenerator.jenerateQ(3, 5);

var but = taskJenerator.createElement({
  tagName:'div',
  className: 'button',
  parentElement: form
});

taskJenerator.createElement({
  tagName:'input',
  className: 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-checkbox__label',
  inputType: 'submit',
  tagValue:'check the result',
  parentElement: but
});
