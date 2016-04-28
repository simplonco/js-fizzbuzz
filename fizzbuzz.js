//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

// Function definition
var fizzbuzz = function(number) {
  if ((number % 3 == 0)||(number % 5 == 0)) {
    if ((number % 3 == 0) && (number % 5 == 0)) {
      return "fizzbuzz";
    } else if (number % 3 == 0) {
      return "fizz";
    } else {
      return "buzz ";
    }
  } else {
    return "number";
  }
};
console.log(fizzbuzz(30));
console.log(fizzbuzz(14));
console.log(fizzbuzz(25));
console.log(fizzbuzz(9));
module.exports = { fizzbuzz: fizzbuzz };
// Tests
//for (var i = 0; i < 50; i = i + 1) {
//  console.log("fizzbuzz(" + i + ") => " + fizzbuzz(i));
//}
