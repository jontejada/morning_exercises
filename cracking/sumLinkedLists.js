function sum(n1, n2) {
	var out = {},
		current = out,
		tens = 0,
		firstVal = 0,
		secondVal = 0,
		sum = 0;
	while(n1 || n2) {
		firstVal = 0;
		secondVal = 0;
		if (n1) {
			firstVal = n1.value;
			n1 = n1.next;
		}
		if (n2) {
			secondVal = n2.value;
			n2 = n2.next;
		}
		sum = firstVal + secondVal + tens;
		current.value = sum%10;
		sum > 9 ? tens = 1 : tens = 0;
		var nextNode = {};
		current.next = nextNode;
		current = nextNode;
	}
	return out;
}

var d = {
	value: 3,
	next: null
};
var c = {
	value: 6,
	next: d
};
var b = {
	value: 1,
	next: c
};
var a = {
	value:7, 
	next: b
};
var g = {
	value: 2,
	next: null
};
var f = {
	value: 9,
	next: g
};
var e = {
	value: 5,
	next: f
};

sum(a,e);