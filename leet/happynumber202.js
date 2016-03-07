// https://leetcode.com/problems/happy-number/
// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	var str = n.toString();
	var list = [];
	while (str !== '1' && list.indexOf(str) === -1) {
		list.push(str);
		var num = 0;
		for(var i = 0; i<str.length; i++) {
			num += Number(str[i]) * Number(str[i]);
		}
		str = num.toString();
	}
	if (str === '1') {
		return true;
	}
	return false;
};


console.log(isHappy(18));
console.log(isHappy(19));