// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The integers in the array are either entirely odd or entirely even except for a single integer N. Write a method that takes the array as an argument and returns N.
// For example:
var arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];
console.log(u(arr1),11);
var arr2 = [160, 3, 1719, 19, 11, 13, -21];
console.log(u(arr2),160);

function u(arr) {
	var odds = [];
	var evens = [];
	for (var i = 0; i<arr.length; i++) {
		if (arr[i]%2 === 0) {
			evens.push(arr[i]);
		} else {
			odds.push(arr[i]);
		}
	}
	return odds.length === 1 ? odds[0] : evens[0];
}

