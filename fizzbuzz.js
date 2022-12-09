//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';



var fizzbuzz = function (x) {

 

    if (x % 3 === 0 && x % 5 !== 0) {
        console.log("fizz");
    }

    else if (x % 5 === 0 && x % 3 !== 0) {
        console.log("buzz");
    }

    else if (x % 5 === 0 && x % 3 === 0) {
        console.log("fizzbuzz");
    }

    else {
        console.log(x)
    };

};

fizzbuzz(25)
fizzbuzz(3)
fizzbuzz(30)
fizzbuzz(55)
fizzbuzz(2)

module.exports = { fizzbuzz: fizzbuzz };
