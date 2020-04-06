//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
    for(var i= 1; i <= 100; i++){
        console.log(i);
        if(i % 5 ===0; i % 3 ===0){
            console.log("fizzbuzz")
        }
        else if(i % 3 !==0; i % 5 !==0){
            console.log(i)
        }
        else if(i % 3 ===0; i % 5 !== 0){
            console.log("fizz")
        }
        else if(i % 5 ===0; i % 3 !==0){
            console.log("buzz");
        }
    }
    
    module.exports = { fizzbuzz: fizzbuzz };
    