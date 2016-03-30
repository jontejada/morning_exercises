/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
	// return parseInt(n.toString(2).split('').reverse().join(''),2);
	var numToPad = n.toString(2);
	numToPad = '0'.repeat(32 - numToPad.length) + numToPad;
	return parseInt(numToPad.split('').reverse().join(''),2);
};




// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

// Follow up:
// If this function is called many times, how would you optimize it?

//       10100101000001111010011100
// 00000010100101000001111010011100