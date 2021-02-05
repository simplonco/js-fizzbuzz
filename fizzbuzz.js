//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.


let fizzbuzz = function (x) {

    let result;
    
    if (x %3===0){
      result = 'fizz'}

    if (x %5===0){
      result = 'buzz'}

    if (x %5===0 && x %3===0){
      result = 'fizzbuzz'}

    if (!(x %5===0 || x %3===0)){
          result = (x);
        }

console.log(result) ;

}

fizzbuzz(2) 
fizzbuzz(5) 
fizzbuzz(6) 
fizzbuzz(11)
fizzbuzz(30) 
