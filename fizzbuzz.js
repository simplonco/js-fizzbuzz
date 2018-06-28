//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
if ((number % 3 == 0)||(number % 5 == 0)) {
    if ((number % 3 == 0) && (number % 5 == 0)) {
     return "fizzbuzz";
    } else if (number % 3 == 0) {
      return "fizz";
    } else {
      return "buzz";
    }
  } else {
    return number;
  }
  };
module.exports = { fizzbuzz: fizzbuzz };
