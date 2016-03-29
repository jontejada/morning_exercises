// Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated 
// sequence of one or more dictionary words.

// For example, given
// s = "leetcode",
// dict = ["leet", "code"].

// Return true because "leetcode" can be segmented as "leet code".


/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
	var saveS = s;
	goHere: while(s) {
		console.log('here============',s);
		for (var i = 1; i <= s.length; i++) {
			if (wordDict.has(s.substring(0 , i))) {
				console.log('if', s.substring(0 , i));
				// wordDict.delete(s.substring(0 , i));
				s = s.substring(i);
				console.log(s);
				continue goHere;
			}
		}
		// return false;
		break;
	}
	s = saveS;
	goHere2: while(s) {
		console.log('here2============',s);
		for (var i = 1; i <= s.length; i++) {
			if (wordDict.has(s.substring(0 , i))) {
				console.log('if', s.substring(0 , i));
				wordDict.delete(s.substring(0 , i));
				s = s.substring(i);
				console.log(s);
				continue goHere2;
			}
		}
		return false;
	}
	return true;
};

// var in1 = 'leetcode';
// var in2 = new Set();
// in2.add('leet');
// in2.add('code');
// console.log(wordBreak(in1,in2));

// var in1 = 'aaaaaaa';
// var in2 = new Set();
// in2.add('aaaa');
// in2.add('aaa');
// console.log(wordBreak(in1,in2));

var in1 = 'bb';
var in2 = new Set();
in2.add('a');
in2.add('b');
in2.add('bbb');
in2.add('bbbb');
console.log(wordBreak(in1,in2));

// "bb"
// ["a","b","bbb","bbbb"]
