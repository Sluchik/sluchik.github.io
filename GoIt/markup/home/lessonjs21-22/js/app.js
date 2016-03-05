
var app = {
 pow: function() {
      var number = +prompt('Enter your number');
      var n = +prompt('Enter your power');
      var result = 1;
      for (var i = 0 ; i < n; i++) {
      result = +result * number;
   }
console.log('Your result: ' + result);
}
}

app.pow();

try {
  module.exports = app;
} catch (e) {}
