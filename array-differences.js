var anArr = [6,3,5,4,3,4,4,5];
var correctOutArr = ["down","up","down","down","up","even","up"];

function arrDiff(inArr) {
	var outArr = [];
	for (var i = 0; i<inArr.length; i++) {
		var diff = inArr[i+1] - inArr[i];
		if (diff === 0) {
			outArr.push('even');
		} else if (diff > 0) {
			outArr.push('up');
		} else if (diff < 0) {
			outArr.push('down');
		}
	}
	return outArr;
}

console.log(arrDiff(anArr));