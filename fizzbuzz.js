//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
//
// YOUR CODE GOES HERE
//
    if ((x%3 === 0) && (x%5 ===0)){
        return "fizzbuzz"
    };
    if ((x%3 === 0) && (x%5 !== 0)) {
        return "fizz";
    };
    if ((x%5 === 0) && (x%3 !==0)) {
        return "buzz"
    }
    else {
       return x 
    }
};

console.log(fizzbuzz(2))
console.log(fizzbuzz(5))
console.log(fizzbuzz(6))
console.log(fizzbuzz(11))
console.log(fizzbuzz(30))
module.exports = { fizzbuzz: fizzbuzz };
