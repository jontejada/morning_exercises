/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	var c1 = Infinity;
	var c2 = Infinity;
	// var counter = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] <= c1) {
			c1 = nums[i];
		} else if (nums[i] <= c2) {
			c2 = nums[i];
		} else {
			return true;
		}
	}
	return false;
};