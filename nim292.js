/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // if (n%4 === 0) {
    // 	return false;
    // }
    // return true;
    return n%4 === 0 ? false : true;
};

console.log(canWinNim(1));
console.log(canWinNim(2));
console.log(canWinNim(3));
console.log(canWinNim(4));
console.log(canWinNim(5));
console.log(canWinNim(6));
console.log(canWinNim(7));
console.log(canWinNim(8));
console.log(canWinNim(9));
console.log(canWinNim(10));
console.log(canWinNim(11));
console.log(canWinNim(12));
console.log(canWinNim(13));
console.log(canWinNim(14));