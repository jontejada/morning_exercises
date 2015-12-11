// What problem does the following code create?
// Why does this happen?
// How can we correct it?

var nodes = document.getElementsByTagName('button');

for (var i = 0; i < nodes.length; i++) {
	console.log(i);
	//nodes[i].innerHTML = i;
	nodes[i].value = i+1;
	nodes[i].addEventListener('click', function() {
	console.log('You clicked element #' + this.getAttribute('value'));
	});
}