var obj1 = {
	2:"ellie",
	3:"liz",
	"-1":"no",
	"awesome":"cho",
	"NaN":"something"
};

function addKeys(inputObj) {
	var keyArr = Object.keys(inputObj);
	var total = keyArr.reduce(function(a,b){
		var nA = 0;
		var nB = 0;
		if (!isNaN(a)) {
			nA = Number(a);
		}
		if (!isNaN(b)) {
			nB = Number(b);
		}
		return nA + nB;
	});
	console.log(total);
}
addKeys(obj1);

function addKeys2(inputObj) {
	//second method here
	return Object.keys(obj).reduce(function(prev,current) {
		return prev = Number(current) + prev || prev;
	},0)	
}





