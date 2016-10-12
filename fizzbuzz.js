'use strict';

var fizzbuzz = function (x) {
if (x % 3 == 0) {
  return("Fizz");
}
if (x % 5 == 0) {
  return("Buzz");
}
if ((x % 3 ==0) && (x % 5 ==0)) {
  return("FizzBuzz");
}
else {
  return("x");
}
};

module.exports = { fizzbuzz: fizzbuzz };
