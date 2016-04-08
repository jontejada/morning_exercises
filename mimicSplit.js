function mimicSplit(str,spl) {
	var out = [];
	if (!spl) spl = '';
	if (spl === '') {
		for(var i = 0; i < str.length; i++) {
			out.push(str[i]);
		}
		return out;
	}
	while (str.indexOf(spl) >= 0) {
		out.push(str.slice(0,str.indexOf(spl)));
		str = str.slice(str.indexOf(spl) + spl.length);
	}
	out.push(str);
	return out;
}
// console.log(mimicSplit('cdefebc','e'));
// console.log(mimicSplit('edefebc','e'));
console.log(mimicSplit('abcd'));
// console.log(mimicSplit('abcd','e'));