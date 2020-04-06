//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

"use strict";

var fizzbuzz = function (x) {
  const result = [x, "fizz", "buzz", "fizzbuzz"];

  return result[!(x % 3) + !(x % 5) * 2];
};

module.exports = { fizzbuzz: fizzbuzz };
