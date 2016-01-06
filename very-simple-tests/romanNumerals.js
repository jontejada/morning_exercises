/**
 * This function will convert a string to it's roman numeral value.
 * If the string is not a valid roman numeral string, this function
 * will return NaN.
 */

require('locus');

function convertRomanNumeral(input) {
	// This constant could be globalized.
	var ROMAN_LOOKUP = {
		i: 1,
		v: 5,
		x: 10,
		l: 50,
		c: 100,
	};

	var sum = 0;
	var lowerCaseInput = input.toLowerCase();
	
	for(var i = 0; i < lowerCaseInput.length; i++) {
		var currentChar = lowerCaseInput[i],
		    nextChar    = lowerCaseInput[i+1];
		    
		var currentRomanValue = ROMAN_LOOKUP[currentChar],
		    nextRomanValue    = ROMAN_LOOKUP[nextChar]

		if(currentRomanValue < nextRomanValue) {
			sum -= currentRomanValue;
		}
		else {
			sum += currentRomanValue;
		}
	}
	
	return sum;
};


/* Write some tests that verify the behavior described in the comment. 
 * You should write several functions, the call each of those functions
 * from this function, which should return true if convertRomanNumerals
 * is correct, and false otherwise. 
 */
function testConvertRomanNumerals(){
	if ( !convertRomanNumeral('string') && ( convertRomanNumeral('xvi') === 16 ) && ( convertRomanNumeral('') === 0 ) ) {
		return true;
	}
	return false;
}

eval(locus);
