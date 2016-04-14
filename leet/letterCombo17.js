// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
var phone = {
	0: '',
	1: '',
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz'
};

function letterCombinations(digits) {
    var out = [];
    if(digits.length === 0)
        return out;
    var tmp = [];
    getString(digits, tmp, out);
    return out;
}
function getString(digits, tmp, out){
    if(digits.length === 0){
        out.push(tmp.join(''));
        return;
    }
    var curr = parseInt(digits.substring(0,1));
    var letters = phone[curr];
    for(var j=0; j<letters.length; j++){
        tmp.push(letters.charAt(j));
        getString(digits.substring(1), tmp, out);
        tmp.pop();
    }
}
// console.log(letterCombinations("236"));