//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {

// YOUR CODE GOES HERE

//fizz
/*
-1 Entrer une valeur dans une variable
-2 SI la valeur est divisible par 3 && N'EST PAS divisible par 5
    console.log("fizz")
-3 SINON
    console.error

    Nombre est un multiple de quelque chose :

    SI le modulos du nombre / ... =0 Alors le nombre est un multiple de ...

    */


if (x %3 === 0 && x% 5 !== 0 ){
    return "Fizz"
}
else
//BUZZ
if (x %5 === 0 && x% 3 !== 0 ){
    return "Buzz"
}
else
//FIZZBUZZ
if (x %5 === 0 &&  x%3 === 0){
    return 'fizzbuzz'
}
//Afficher le Nombre si aucunes conditions n'est rempli
else{
    return x
}
//
};

module.exports = { fizzbuzz: fizzbuzz };
