// write a function that will take in a number
// return true if it is a perfect square. false if otherwise. 

function sq(input){
	if ( parseInt(Math.sqrt(input),10) === Math.sqrt(input) ) {
		return true;
	} else {
		return false;
	}
}

console.log(true, sq(16));
console.log(false, sq(20));
console.log(true, sq(4));
console.log(false, sq(-20));
console.log(false, sq(-4));
console.log(true, sq(1024));
console.log(false, sq(1024.1));

