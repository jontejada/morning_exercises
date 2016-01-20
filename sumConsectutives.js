/*
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list. Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.

[1,4,4,4,0,4,3,3,1] --> [1,12,0,4,6,1]
[1,1,7,7,3] --> [2,14,3]
[-5,-5,7,7,12,0] --> [-10,14,12,0]
*/
//			  0 1 2 3 4 5 6 7 8
var inArr1 = [1,4,4,4,0,4,3,3,1];
var inArr2 = [1,1,7,7,3];
var inArr3 = [-5,-5,7,7,12,0];

function sum(inArr) {
	var outArr = inArr,
		cons = [];
	for (var i=0; i<inArr.length; i++) {
		if (inArr[i] === inArr[i+1]) {
			cons.push(i);
		}
	}
	for (var j = cons.length - 1; j >= 0; j--) {
		outArr.splice(cons[j], 2, outArr[cons[j]]+outArr[cons[j]+1]);
	}
	return outArr;
}

console.log('expected array & actual array');

console.log('[1,12,0,4,6,1]', sum(inArr1));
console.log('[2,14,3]', sum(inArr2));
console.log('[-10,14,12,0]', sum(inArr3));