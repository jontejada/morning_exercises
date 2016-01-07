// Write a function that takes two arrays and returns a new array with all items in alphabetical order.

var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ];

console.log(alphanimal(array1, array2));
//-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]

function alphanimal(arr1, arr2) {
	return arr1.concat(arr2).sort();
}

// function alphanimal2(arr1, arr2) {
// 	var newArr = [];
// 	var arr1unicode = {};
// 	for (var i=0; i<arr1.length; i++) {
// 		arr1[i]
// 	}
// 	return newArr;
// }