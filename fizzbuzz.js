//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.


var fizzbuzz = function (c)  {
 if(c % 3 === 0 && c % 5 === 0){
   return "fizzbuzz";
 }
 else if(c % 3 === 0) {
   return "fizz";
 }
 else if(c % 5 === 0){
   return "buzz";
 }
 else {
   return c;
 }

'use strict';

var fizzbuzz = function (x) {
//
// YOUR CODE GOES HERE
//

};

module.exports = { fizzbuzz: fizzbuzz };
