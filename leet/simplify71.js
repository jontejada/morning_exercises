/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	var arr = path.split('/').filter(keep);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === '..') {
			if (i > 0) {
				arr.splice(i-1,2);
				i = i - 2;
				continue;
			}
			if (i === 0) {
				arr.splce(0,1);
				i = i - 1;
				// continue;
			}
		}
	}
	return '/' + arr.join('/');
};

function keep(str) {
	return str !== '.' && str !== '';
}

// console.log(simplifyPath('/sdasd/sda/./asda/nope/../asdasd/'));