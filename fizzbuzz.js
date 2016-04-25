//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function(n) {
    if (n % 15 == 0) {
        return 'fizzbuzz';
    } else if (n % 3 == 0) {
        return 'fizz';
    } else if (n % 5 == 0) {
        return 'buzz';
    } else {
        return n;
    }
    var fizzbuzz = function(x) {}
};

module.exports = {
    fizzbuzz: fizzbuzz
};
