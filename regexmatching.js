// case-insensitive, ignore nums
// return first matched char (ignoring nums), or return -1 if no matches

// index:01234567
var a = 'abcdA'; // 0
var b = 'a1bcdec1'; // 3
var c = 'a1bcdeC1'; // 3
var d = '1111aa1111'; // 4
var e = '390483jz2098230g98230iz98320983205789809'; // 7

// without regex:
function getMatch(input) {
	for (var i = 0; i < input.length; i++) {
		var current = input[i].toLowerCase();
		var working = input.substr(i+1).toLowerCase();
		var find = working.indexOf(current);
		if ( find >= 0 && isNaN(Number(current)) ) {
			return i;
		}
	}
	return -1;
}

console.log('getMatch function:');
console.log(getMatch(a));
console.log(getMatch(b));
console.log(getMatch(c));
console.log(getMatch(d));
console.log(getMatch(e));

// with regex:
function getMatchRegex(input) {
	return input.search(/([a-z]).*\1/i);
}

console.log('getMatchRegex function:');
console.log(getMatchRegex(a));
console.log(getMatchRegex(b));
console.log(getMatchRegex(c));
console.log(getMatchRegex(d));
console.log(getMatchRegex(e));

