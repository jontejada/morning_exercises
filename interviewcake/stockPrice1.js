function myFunction(arr) {
	var max;
    for ( var i = arr.length - 1; i >= 0; i--) {
    	for ( var j = 0; j < i; j++) {
            var diff = arr[i] - arr[j];
        	if ( diff > max || !max ) max = diff; 
        }
    }
    return max;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([10,7,5,8,11,9]));
