
function pow() {
  var  result;
   var number = parseInt(prompt('Enter your number'));
   var n = parseInt(prompt('Enter your power '));
   var result = 1;
   for (var i = 0 ; i < n; i++) {
     result = result * number;
   };
  alert('Your result: ' + [result]);
};
pow();
