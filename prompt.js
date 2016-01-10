
// Your goal is to create a command line game, where users
// guess a randomly generated number between 1-100 until 
// they have guessed correctly. 

var prompt = require('prompt');
var randomNumber = Math.floor(Math.random() * 100) ; // fix this to be random
console.log('random', randomNumber);
var globalGuess = undefined;

prompt.start();

function ask() {
	prompt.get(['guess'], function (err, result) {
		globalGuess = result.guess;
	});
	// return globalGuess;
}

function game() {
	ask();
	if (globalGuess !== randomNumber) {
		game();
	} else {
		console.log('correct');
	}
}

game();


//not working
// Create a game, where users can guess until they guess correctly.


// while (globalGuess !== randomNumber) {
// 	prompt.get(['guess'], function (err, result) {
// 		globalGuess = result.guess;
// 	});
// }
// console.log('correct');