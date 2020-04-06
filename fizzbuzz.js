//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
//
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

let nb = 9

if (nb %3 === 0 && nb % 5 !== 0 ){
    console.log("Fizz")
}
else

//BUZZ


if (nb %5 === 0 && nb % 3 !== 0 ){
    console.log("Buzz")
}
else

//FIZZBUZZ
if (nb %5 === 0 &&  nb %3 === 0){
    console.log("FizzBuzz")
}
//Afficher le Nombre si aucunes conditions n'est rempli
else{
    console.log(nb)
}
//
};

module.exports = { fizzbuzz: fizzbuzz };
