function lowercaseCount(str){
	var count = str.match(/[a-z]/g);
	if (!count) {
		return 0;
	}
	return count.length;
}

console.log(lowercaseCount('abABaNs'));
console.log(lowercaseCount(''));