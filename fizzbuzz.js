//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.
'use strict';
 
 var fizzbuzz = function (x) {

  if(X % 3 == 0 && X % 5 == 0){
    return "fizzbuzz";
  };
    
  else if(X % 5 == 0){
    return "buzz"; 
  };
  
  else if (X % 3 == 0 ){
   return "fizz";
  };
  else {
   return "x";
  };
  
 };
 
 module.exports = { fizzbuzz: fizzbuzz };
