function sumArguments(){
	
	//simple for loop:
	// var total = 0;
	// for (var i = 0; i< arguments.length; i++) {
	// 	total +=arguments[i];
	// }
	
	//slice and reduce:
	// var args = Array.prototype.slice.call(arguments);
	var args = [].slice.call(arguments);
	var total = args.reduce(function(a,b){
		return a + b;
	});

	console.log(total);
}

sumArguments(1,2,3,4,-5);