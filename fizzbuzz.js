//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

var fizzbuzz = function ()  {
for (var i = 0; i <= 100; i++) {
  if(i % 15 === 0){
    console.log('fizzBuzz')
  }
  else if (i % 5 === 0) {
    console.log('buzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  }
  else{
    console.log(i)
  }
}
};

module.exports = fizzbuzz;
