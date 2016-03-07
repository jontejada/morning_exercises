// whttps://leetcode.com/problems/add-digits/
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// For example: Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
// Follow up: Could you do it without any loop/recursion in O(1) runtime?
// Hint: A naive implementation of the above process is trivial. Could you come up with other methods?

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	var str = num.toString();
	while (str.length > 1) {
		var out = 0;
		for (var i = 0; i<str.length; i++) {
    		out += Number(str[i]);
    	}
    	str = out.toString();
	}
    return Number(str);
};



console.log(addDigits(19));