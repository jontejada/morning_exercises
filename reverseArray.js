function recReverse(list) {
    if(list.length <= 1) return list;
    var end = [list.shift()];
    var start = [list.pop()];
    return start.concat(recReverse(list)).concat(end);
}


// console.log(recReverse([1, 2, 3, 'd']));




function find(arr, f) {
	if (arr.length === 0) return -1;
	if (arr[arr.length - 1] === f) return arr.length - 1;
	arr.pop();
	return find(arr, f);
}

console.log(find(['a','b','c','d'],'c'));