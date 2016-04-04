function getPrimes() {
	var out = [];
	var cur = 1;
	wLoop:
	while(out.length < 100) {
		cur++;
		for(var i = 0; i < out.length; i++) {
			if(cur%out[i] === 0) {
				continue wLoop;
			}
		}
		out.push(cur);
	}
	return out;
}
console.log(getPrimes());