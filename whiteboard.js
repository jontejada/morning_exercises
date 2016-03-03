// function rev(str) {
// 	var out = "";
// 	for (var i = str.length - 1; i >= 0; i--) {
// 		out += str[i];
// 	}
// 	return out;
// }

// function pal(str) {
// 	for (var j = 0; j < str.length - 3; j++) {
// 		var fourChars = str.substr(j, j + 3);
// 		if (fourChars === rev(fourChars)) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

function fib(n) {
	if (n===1) {
		return 1;
	}
	else if (n===0) {
		return 0;
	}
	else {
		return fib(n-2) + fib(n-1);
	}
}

console.log(fib(6));