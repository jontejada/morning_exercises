function myFunction(arr) {
	var max = []; // will be a three element array
	var min = []; // will be a two element array of negative ints

	for (var i = 0; i < arr.length; i++) {
		var cur = arr[i];
		if (max[0] === undefined || cur > max[0]) {
			max[2] = max[1];
			max[1] = max[0];
			max[0] = cur;
		} else if (max[1] === undefined || cur > max[1]) {
			max[2] = max[1];
			max[1] = cur;
		} else if (max[2] === undefined || cur > max[2]) {
			max[2] = cur;
		}
		if (min[0] === undefined || cur < min[0]) {
			min[1] = min[0];
			min[0] = cur; 
		} else if (min[1] === undefined || cur < min[1]) {
			min[1] = cur;
		}
	}
    return Math.max( max[0] * max[1] * max[2], max[0] * min[0] * min[1] );
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([1,2,3])); //6
console.log(myFunction([-10,-10,1,2,3])); //6
