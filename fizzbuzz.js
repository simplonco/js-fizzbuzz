//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

"use strict";

var fizzbuzz = function(x) {
	// declaration de la boucle( init nombre, condition de la boucle et itération)
	for (let x = 1; x <= 100; x++) {
		// condition "fizzbuzz" si x multiple de 3 et 5
		if (x % 3 === 0 && x % 5 === 0) {
			return "fizzbuzz";

			// condition "fizz" si x multipe de
		} else if (x % 3 === 0) {
			return "fizz";

			// condition "buzz" si x multiple de 5
		} else if (x % 5 === 0) {
			return "buzz";

			//affiche x si pas multiple de 5 ni de 5
		} else {
			return x;
		}
	}
};

module.exports = { fizzbuzz: fizzbuzz };
