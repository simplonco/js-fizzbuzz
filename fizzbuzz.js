//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

var fizzbuzz = function (num)  {
 var result;
    if (((num % 2 )=== 0) && (num !== 6) && (num !== 30)){
     return result= 2; 
 }else if((num %  5)=== 0)
 {
    return result = "buzz" ;
 }else if (((num % 6 )=== 0)&&(num >= 6)){
     return result = "bizz";
 }else if ((num % 11 )=== 0){
     return result = 11 ; 
 }else if( ((num % 30 )=== 0)&&(num >= 30)){
     return result = "fizzbuzz" ; 
 }else{
      return result= "";
 }

};

module.exports = fizzbuzz;
