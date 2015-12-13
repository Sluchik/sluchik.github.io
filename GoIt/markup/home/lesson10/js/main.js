
var number = +prompt('Enter your number');
var n = +prompt('Enter your power ');

function pow(number, n) {
  var  result;
  var result = 1;
      for (var i = 0 ; i < n; i++) {
      result = +result * number;
   };
   return result;
};

console.log('Your result: ' + pow(number, n));
