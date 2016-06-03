//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
(function fizzBuzz(iter){
    var str = '';


    if(!(iter % 3)) str += 'Fizz'
    if(!(iter % 5)) str += 'Buzz'


    console.log(str || iter)


    if(iter >= 100) return


    fizzBuzz(++iter)
})(1)
};

module.exports = { fizzbuzz: fizzbuzz };
