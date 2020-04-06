//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

"use strict";

var fizzbuzz = function(x) {
	// declaration de la boucle( init nombre, condition de la boucle et itération)
	for (let nombre = 0; nombre <= 50; nombre++) {
		// condition "fizzbuzz" si nombre multiple de 3 et 5
		if (nombre % 3 === 0 && nombre % 5 === 0) {
			console.log("fizzbuzz");

			// condition "fizz" si nombre multipe de
		} else if (nombre % 3 === 0) {
			console.log("fizz");

			// condition "buzz" si nombre multiple de 5
		} else if (nombre % 5 === 0) {
			console.log("buzz");

			//affiche nombre si pas multiple de 5 ni de 5
		} else {
			console.log(nombre);
		}
	}
};

module.exports = { fizzbuzz: fizzbuzz };
