// map is a function that allows us to 'map' elements
// in one array to elements in a new array. It works
// by creating parallel arrays. Here is the syntax:

var second = [1,2,3].map(function(item) {
	return item + 1;
}); 

// console.log(second) // [2, 3, 4]

// Use map to take this array of objects and create an array
// with objects which have had their keys and values swapped

var input = [
	{1: 'a'},
	{2: 'b'},
	{3: 'c'},
	{4: 'd'}
]; 

function swap(inputArr) {
	return inputArr.map(function(obj){
		var newKey = obj[Object.keys(obj)[0]];
		var newValue = Object.keys(obj)[0];
		var newObj = {};
		newObj[newKey] = newValue;
		return newObj;
	});
}

console.log(swap(input));

// Sample output should be: [{'a': 1}, {'b': 2}, {'c': 3}, {'d', 4}]

// Take your swapped output once it matches the above comment
// and map again returning an array where the elements are
// the concatenation of the keys and values
// so you should have: ['a1', 'b2', 'c3', d4]

function concat(inputArr){
	return inputArr.map(function(obj){
		return Object.keys(obj)[0] + obj[Object.keys(obj)[0]];
	});
}

console.log(concat(swap(input)));

// Once you have the array above, read the 'reduce' fucntion documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Feel free to google and find other resources to help you use reduce.

// Now, use reduce to return the string 'a1b2c3d4'.

function red(inputArr){
	return inputArr.reduce(function(prev, str){
		return prev + str;
	});
}

//nested functions
console.log(red(concat(swap(input))));

