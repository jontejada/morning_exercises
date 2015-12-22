var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

function printerError(s) {
	var bad = 0;
	for (var i = 0 ; i < s.length ; i++) {
		if (s.charCodeAt(i) > 109) {
			bad++;
		}
	}
	var denom = s.length;
	console.log( bad + '/' + denom );
}

printerError(s);



//SECOND KATA
// function squareDigits(num){
// 	var input = num.toString();
// 	var output = '';
//  	for (var i = 0 ; i < input.length ; i++) {
//     	var sq = input[i]*input[i];
// 	    output += sq.toString();
// 	}
// 	return output;
// }

// console.log(squareDigits(9119));



//THIRD KATA

// function Counter(){
//   var count = 0;
// }

// Counter.prototype.incr = function() {
//   count++;
// }

// var c = new Counter();
// c.incr();
// console.log(c);

