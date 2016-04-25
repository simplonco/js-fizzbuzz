//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

var fizzbuzz = function (x)  {
   if (((x % 3) == 0)&&((x % 5) == 0))
      {
         return x = "fizzbuzz" ;
         
       }
  else if (((x % 3) == 0)&&((x % 5) !== 0))
   
       {  return x= "fizz";
            
       }
  else if (((x % 3) !== 0)&&((x % 5) == 0))
  
      {  return x ="buzz";
           
      }
      return x;
};

module.exports = fizzbuzz;
