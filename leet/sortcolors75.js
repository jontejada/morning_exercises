/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
// 	var r = 0,
// 		w = 0,
// 		b = 0,
// 		ordered = [];
//     for (var i = 0; i<nums.length; i++) {
//     	if (nums[i] === 0) r++;
//     	if (nums[i] === 1) w++;
//     	if (nums[i] === 2) b++;
//     }
//     for (var j = 0; j < r; j++) {
//     	ordered.push(0);
//     }
//     for (var k = 0; k < w; k++) {
//     	ordered.push(1);
//     }
//     for (var l = 0; l < b; l++) {
//     	ordered.push(2);
//     }
//     nums = ordered;
//     // return nums;
// };

var sortColors = function(nums) {
	for (var i = 0; i<nums.length; i++) {
		console.log(i);
		console.log(nums);
		if (nums[i] === 0) {
			nums.splice(i,1);
			nums.unshift(0);
		}
		if (nums[i] === 2) {
			nums.splice(i,1);
			nums.push(2);
			if(nums[i] !==1 && nums[i] !== nums[i+1] && i !== nums.length - 1) {
				i--;
			}
		}
	}
	return nums;
};


// console.log(sortColors([2,2,1]));
console.log(sortColors([1,2,0,0])); //broken because of nums[i] !== nums[i+1]
// console.log(sortColors([1,0]));
// console.log(sortColors([1,0,2,1,0,1,2]));
// console.log(sortColors([1,0,0,0,1,2,1]));








