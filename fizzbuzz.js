//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {

  if (x % 5 === 0 && x % 3 === 0) {
    print("fizz");
  }
  else if (x % 5 === 0) {
    print("buzz");
  }
  else if (x % 3 === 0) {
    print("fizzbuzz");
  }
  else {
    print("x");
  }
  
};

module.exports = { fizzbuzz: fizzbuzz };
