//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
  

  if (x % 3 == 0 ) {
    println ("fizz");
  }
  
  if else (x % 5 == 0 ) {
    println ("buzz");
  }
  
  if else (x % 3 == 0 && x % 5 == 0 ) {
    println ("fizzbuzz");
  }
  else {
    println (x);
  }
  
};

module.exports = { fizzbuzz: fizzbuzz };
