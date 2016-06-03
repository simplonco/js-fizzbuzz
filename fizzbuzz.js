//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x)  {
  var together = "";
  if (x % 3 === 0 ){
    together += "fizz" ;
  }
  if (x % 5 === 0) {
    together += "buzz";
  }
  module.exports = { fizzbuzz: fizzbuzz };
  console.log (together || x);
};
fizzbuzz(31);
fizzbuzz(2); 
fizzbuzz(5) ;
fizzbuzz(6) ;
fizzbuzz(11) ;
fizzbuzz(30);
