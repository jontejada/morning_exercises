console.log(charCounts("This is a string!!!"));
console.log(allCharsUnique("This is a string!!!"));
console.log(allCharsUnique("Thisa rng!"));
//{ T: 1, h: 1, i: 3, s: 3, ' ': 3, a: 1, t: 1, r: 1, n: 1, g: 1, '!': 3 }

//console.log(charCounts("!Data!Is~The*Coolest"))
// { '!': 2,
//   D: 1,
//   a: 2,
//   t: 2,
//   I: 1,
//   s: 2,
//   '~': 1,
//   T: 1,
//   h: 1,
//   e: 2,
//   '*': 1,
//   C: 1,
//   o: 2,
//   l: 1 }


function charCounts(str) {
  var countObj = {};
  for (var i = 0; i < str.length; i++) {
    if (!countObj[str[i]]) {
      countObj[str[i]] = 1;
    } else {
      countObj[str[i]]++;
    }
  }
  return countObj;
}

function allCharsUnique(str) {
  var obj = charCounts(str);
  var uniq = true;
  for (var prop in obj){
    if (obj[prop] > 1) {
      uniq = false;
    }
  }
  return uniq;
}