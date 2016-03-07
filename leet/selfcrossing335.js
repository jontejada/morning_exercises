// /**
//  * @param {number[]} x
//  * @return {boolean}
//  */
// var isSelfCrossing = function(x) {
//     var currentX = 0;
//     var currentY = 0;
//     var coords = {};
//     for (var i = 0; i < x.length; i++) {
//         if (i % 4 === 1) { //north
//             currentY += x[i];
//         } else if (i % 4 === 2) { //west
//             currentX -= x[i];
//         } else if (i % 4 === 3) { //south
//             currentY -= x[i];
//         } else { //east
//             currentX += x[i];
//         }
//         console.log(currentX,currentY);
//         console.log(coords[currentX + "," + currentY]);
//         if (coords[currentX + "," + currentY]) {
//             return true; //selfcrossing
//         }
//         coords[currentX + "," + currentY] = true;
//         console.log(coords);
//     }
//     return false; //not selfcrossing
// };

// function step(d){
// 	if (d === 'n') {
		
// 	}
// }

//true
console.log(isSelfCrossing([2, 1, 1, 2]));

//false
console.log(isSelfCrossing([1, 2, 3, 4]));

//true
console.log(isSelfCrossing([1, 1, 1, 1]));



function isSelfCrossing(x) {
    var now = [0,0], // x,y
        coords = {'0,0':true};
    for (var i=0; i<x.length; i++) {
        var sx=0,
            sy=0;
        if(i%4===1) {sy=1;}
        if(i%4===2) {sx=-1;}
        if(i%4===3) {sy=-1;}
        if(i%4===0) {sx=1;}
        for (var j=0; j<x[i]; j++) {
            now[0] += sx;
            now[1] += sy;
            var newpos = now[0]+','+now[1];
            // console.log(x,y);
            // console.log(coords);
            // console.log(newpos);
            if (coords[newpos]) {
                return true;
            }
            coords[newpos] = true;
        }
    }
    return false;
}