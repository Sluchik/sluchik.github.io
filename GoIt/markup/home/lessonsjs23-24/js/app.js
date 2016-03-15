requirejs.config({ // призначенний для підключення зовнішніх бібліотек
  paths: {
    'jquery': 'http://code.jquery.com/jquery-1.11.3.min',
    'tmpl':'templ'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
});

require(
 [
  'jquery', 'tmpl', 'model', 'view','controller'
  ],
function( $, tmpl, Model, View, Controller){

    var firsToDoList = ['java','HTML','CSS'];
      var newModel = new Model(firsToDoList);
      var newView = new View(newModel);
      var newController = new Controller(newModel, newView);
   }
);
