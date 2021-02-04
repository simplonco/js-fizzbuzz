//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
    var i;
    for (i = 0; i <= 100; i++) {

        if (i % 5 == 0 && i % 6) {

            console.log("fizzbuzz");

        } else if(i % 5 == 0) { 

            console.log("fizz");

        } else if(i % 6 == 0) { 

            console.log("buzz");

        } else{
            console.log(i);
        }
    }
}

module.exports = { fizzbuzz: fizzbuzz };
