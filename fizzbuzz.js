//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

/*
 * print out "Fizz" if the integer is a multiple of 3 (and not a multiple of 5)
 * print out "Buzz" if the integer is a multiple of 5 (and not a multiple of 3)
 * print "FizzBuzz" if the integer is a multiple of 3 and 5
 * print the number if the integer is not a multiple of 3 or 5
 */

var fizzbuzz = function (i)  {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

module.exports = fizzbuzz;
