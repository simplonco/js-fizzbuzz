var fizzbuzz = function (x)  {
  var together = "";
  if (x % 3 === 0 ){
    together += "fizz" ;
  }
  if (x % 5 === 0) {
    together += "buzz";
  }

  console.log (together || x);
};
fizzbuzz(31);
fizzbuzz(2); 
fizzbuzz(5) ;
fizzbuzz(6) ;
fizzbuzz(11) ;
fizzbuzz(30);