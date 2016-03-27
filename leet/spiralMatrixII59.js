/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	var right = n;
	var bottom = n;
	var left = -1;
	var top = -1;
	var out = [];
	for (var i = 0; i < n; i++) {
		out.push([]);
	}
	var current = 1;
	var direction = 'east';
	var curRow = 0;
	var curCol = 0;
	while (current <= n*n) {
		// console.log('nn');
		switch(direction) {
			case 'east':
				console.log('e');
				while (curCol < right) {
					console.log('eright');
					console.log(curRow,curCol);
					console.log(current);
					out[curRow][curCol] = current;
					current++;
					curCol++;
				}
				curCol--;
				curRow++;
				top++;
				direction = 'south';
				break;
			case 'south':
				console.log('s');
				while (curRow < bottom) {
					out[curRow][curCol] = current;
					current++;
					curRow++;
				}
				curRow--;
				curCol--;
				right--;
				direction = 'west';
				break;
			case 'west':
				console.log('w');
				while (curCol > left) {
					out[curRow][curCol] = current;
					current++;
					curCol--;
				}
				curCol++;
				curRow--;
				bottom--;
				direction = 'north';
				break;
			case 'north':
				console.log('n');
				while (curRow > top) {
					out[curRow][curCol] = current;
					current++;
					curRow--;
				}
				curRow++;
				curCol++;
				left++;
				direction = 'east';
				break;
		}
	}
	return out;    
};


console.log(generateMatrix(50));