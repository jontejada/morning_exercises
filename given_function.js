function arrayShuffler(array) {
  var m = array.length, t, i; //set variables, with m being length of the input array

  while (m) { //while loop that runs until m = 0
    i = Math.floor(Math.random() * m--); //random number generator, between 0 and one less than m. also decrements m by 1.

    t = array[m]; //set t to the contents of the array at m, which is the last element (and moves back through the array over iterations of the while loop)
    array[m] = array[i]; //set the contents of the m position to be the contents of the array at random index number 
    array[i] = t; //set the contents of the array at the random index number to the one at m 
  }

  return array; //return shuffled array 
}

function x(array) {
  var m = array.length, t, i;

  while (m) {
  	console.log('round ' + m);
    i = Math.floor(Math.random() * m--);
  	console.log('rand '+i);
  	console.log('sta ' + array);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    console.log('end ' + array);
  }

  return array;
}




var arr1 = [1,2,3,4,5,6];
var arr2 = [1,2,3];
var arr3 = ['a','b','c','d','e','f'];

console.log(x(arr3));