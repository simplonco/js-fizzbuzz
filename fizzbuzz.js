//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

var fizzbuzz = function ()  {
  fizzbuzz.prototype.hello = function(num) {
    if ((num % 3) ===1){
      return "Fizz";
    }
    if ((num % 5) === 1) {
      return "Buzz";

    }
    if ((num%3 && num%5) === 1) {
      return FizzBuzz;
    }
  };


};

module.exports = fizzbuzz;
