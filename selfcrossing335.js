/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
    var currentX = 0;
    var currentY = 0;
    var coords = {};
    for (var i = 0; i < x.length; i++) {
        if (i % 4 === 1) { //north
            currentY += x[i];
        } else if (i % 4 === 2) { //west
            currentX -= x[i];
        } else if (i % 4 === 3) { //south
            currentY -= x[i];
        } else { //east
            currentX += x[i];
        }
        console.log(currentX,currentY);
        console.log(coords[currentX + "," + currentY]);
        if (coords[currentX + "," + currentY]) {
            return true; //selfcrossing
        }
        coords[currentX + "," + currentY] = true;
        console.log(coords);
    }
    return false; //not selfcrossing
};

function step(d){
	if (d === 'n') {
		
	}
}

//true
console.log(isSelfCrossing([2, 1, 1, 2]));

//false
console.log(isSelfCrossing([1, 2, 3, 4]));

//true
console.log(isSelfCrossing([1, 1, 1, 1]));
