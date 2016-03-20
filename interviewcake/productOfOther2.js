function myFunction(arr) {
	var out = [];
	for (var i = 0; i < arr.length; i++) {
		var value = 1;
		for (var j = 0; j < arr.length; j++) {
			if (j === i) j++;
			if (arr[j] !== undefined) value *= arr[j];
		}
		out.push(value);
	}
    return out;
}

console.log(myFunction([1, 7, 3, 4, 0])); // returns [84, 12, 28, 21]
