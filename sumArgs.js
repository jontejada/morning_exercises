function sumArguments(){
	// // console.log(arguments);
	// var argArr = arguments;
	// console.log(argArr);
	var total = 0;
	for (var i = 0; i< arguments.length; i++) {
		total +=arguments[i];
	}
	console.log(total);
}

// var in1 = [1,2,3,4,5];
// sumArguments([...in1]);


sumArguments(1,2,3,4,-5);