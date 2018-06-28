//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
    
    if ( x % 15 == 0) {
        return "FizzBuzz";
    }
    else if (x % 3 == 0) {
        return "Fizz";
    }
    else if (x % 5 == 0) {
        return "Buzz";
    }  
    else {
        return x;
    };
};

module.exports = { fizzbuzz: fizzbuzz };
