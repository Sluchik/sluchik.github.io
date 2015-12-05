var number = parseInt(prompt('Enter your number'));
var n = parseInt(prompt('Enter your power '));
function pow(number, n) {
  var  result;
  var result = 1;
      for (var i = 0 ; i < n; i++) {
      result = result * number;
   };
console.log('Your result: ' + result);
alert('Your result: ' + [result]);
};

pow(number, n);
