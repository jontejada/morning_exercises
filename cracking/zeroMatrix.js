var arr1 = [[1,1,1,1],
			[1,1,1,1],
			[1,0,1,1],
			[1,1,1,1]];

// console.log(arr1);

function zeroOut(matrix) {
	var rows = {},
		columns = {};
	for (var row = 0; row < matrix.length; row++) {
		for (var col = 0; col < matrix[row].length; col++) {
			if (matrix[row][col] === 0) {
				rows[row] = true;
				columns[col] = true;
			}
		}
	}
	for (var row = 0; row < matrix.length; row++) {
		for (var col = 0; col < matrix[row].length; col++) {
			if(rows[row] || columns[col]) {
				matrix[row][col] = 0;
			}
		}
	}
	return matrix;
}

console.log(zeroOut(arr1));