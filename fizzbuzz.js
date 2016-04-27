//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

var fizzbuzz = function (number) {
  if (number % 3 == 0) {
    console.log('fizz');
  }
  if (number % 5 == 0) {
    console.log('buzz');
  }
  if ((number % 3 == 0) && (number % 5 == 0)) {
    console.log("fizzbuzz");
  }
  if ((number % 3 != 0) && (number % 5 != 0)) {
    console.log("number");
  }
};
fizzbuzz(30);
fizzbuzz(11);

module.exports = fizzbuzz;
