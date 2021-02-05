//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

let fizzbuzz = function (x) {
  
    if (!(x%3) && (x%5)){
       console.log("fizz");
    }

    else if (!(x%5) && (x%3)) {
        console.log("buzz")
    }

    else if (!(x%5) && !(x%3)) {
        console.log("fizzbuzz")
    }

    else{
    console.log(x)
    }

    }

    

module.exports = { fizzbuzz: fizzbuzz };
