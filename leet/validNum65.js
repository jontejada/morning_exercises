/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
	return s.trim() === '' ? false : !Number.isNaN(Number(s));
};