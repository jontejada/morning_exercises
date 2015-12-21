// This code currently waits 300 milliseconds, then calls the function fizz
// which prints "fizz". Extend this code to achieve the tasks 
// listed below.

setTimeout(fizz, 300);

function fizz() {
	console.log('fizz');
}

function buzz() {
	console.log('buzz');
}

// After 500ms print buzz

setTimeout(buzz,500);

// Count every 100ms and print the number of ms (100, 200, 300)



// Every 300 ms, print fizz

// Every 500 ms print buzz

// after 1500ms print fizzbuzz and stop all other printing functions.

// make it so 300 & fizz don't print, rather only fizz prints on the 300th ms

// Same for 500 and buzz


// var start = new Date().getTime();
// console.log(start);


var intervalID = setInterval(fb, 100);
var round = 0;

function fb(){
	round++;
	console.log('------ ' + round * 100 + 'ms');
	if (round % 15 === 0) {
		console.log('fizzbuzz');
	} else if (round % 5 === 0) {
		console.log('buzz');
	} else if (round % 3 === 0) {
		console.log('fizz');
	} else {
		console.log(round * 100);
	}
	if (round === 15) {
		clearInterval(intervalID);
	}
	// console.log('end of round ' + round);
}