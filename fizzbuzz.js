var fizzbuzz = function (i)  {
    if (i % 3 === 0 && i % 5 === 0){
        return("FizzBuzz");}
    else if (i % 3 === 0){
        return ("Fizz");}
    else {
       return("Buzz");}
   
        
}

console.log (fizzbuzz(12));
