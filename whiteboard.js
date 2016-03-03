//string reverser
function rev(str) {
	var out = "";
	for (var i = str.length - 1; i >= 0; i--) {
		out += str[i];
	}
	return out;
}

//over three char palindrome tester
function pal(str) {
	for (var j = 0; j < str.length - 3; j++) {
		var fourChars = str.substr(j, j + 3);
		if (fourChars === rev(fourChars)) {
			return true;
		}
	}
	return false;
}
// console.log(pal("sahsdsdinsdaabbaa")); // true
// console.log(pal("sahsdsdinsdaeabaa")); // false

//recursive factorial 
function factorial(n) {
	if ( n===1 || n===0 ) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
// console.log(factorial(5));

//for loop factorial NOT WORKING
function factorial2(n) {
	var f = 1;
	for(var i=0; i<n; i++) {
		f = f * (n-1);
	}
	return f;
}
// console.log(factorial2(5));

//for loop fibonacci finder
function fib2(n) {
	var first = 1;
	var second = 1;
	for (var i=0; i<n-2; i++) {
		next = first + second;
		first = second;
		second = next;
	}
	return second;
}
// console.log(fib2(6));

//recursive fibonacci finder
function fib(n) {
	if (n<2) return n;
	return fib(n-2) + fib(n-1);
}
// console.log(fib(6));














