//https://leetcode.com/problems/single-number/
//Given an array of integers, every element appears twice except for one. Find that single one.
//Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var obj = {};
	for (var i = 0; i < nums.length; i++) {
		// console.log(nums[i]);
		if (!obj[nums[i]]) {
			obj[nums[i]] = 1;
		} else {
			obj[nums[i]] += 1;
		}
	}
	for (var prop in obj) {
		if (obj[prop] === 1) {
			return Number(prop);
		}
	}
};

console.log(singleNumber([1,2,3,3,2,1,4]));