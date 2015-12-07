// //case sensitive removal
removeDupes('AABB'); // 'AB'
removeDupes('AaAaBbBb'); // 'AaBb'
removeDupes('cAtCaT'); // 'cAtCaT'
// //case insensitive removal
removeDupes('AABB'); // 'AB'
removeDupes('AaAaBbBb'); // 'AB'
removeDupes('cAtCaT'); // 'cAt'


// //case sensitive version:
function removeDupes(str){
	console.log(str.replace(/(.)(?=.*\1)/g, ""));
}

// //case insensitive version
function removeDupes(str){
	console.log(str.replace(/(.)(?=.*\1)/gi, ""));
}