//function that takes a string of email subject line
//case insensitive
//.replace(/\s+/g, '')

var a = 'FW: FW: RE: FW: FW: sodifjasdfoih'; // 'fw: re:'
var b = 'RE: FW: RE: FW: FW: RE: osdihdsoi'; // 're: fw:'
var c = 'FW: FW: FW: sdsdoihdoiv'; // 'fw:'

function email(input) {
	return input.toLowerCase().split(': ').filter(function(item, i, all){
		return i === all.indexOf(item);
	}).join(': ');
}

console.log(email(a));
console.log(email(b));
console.log(email(c));
