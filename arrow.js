function getADownArrowOf(n) {
  var rows = n;
  var str = "";
  for (var currentRow = rows; currentRow>0; currentRow--) {
    var lineLength = (currentRow * 2) - 1;
    var start = 1;
    var lineStr = '';
    for (var i=0; i<lineLength; i++) {
      lineStr += start.toString();
    }
    console.log(lineStr);
  }
  return str;
}



console.log(getADownArrowOf(5));


/*

Given a number n, make a down arrow shaped pattern.

For example, when n = 5, the output would be:

123454321
 1234321
  12321
   121
    1

123454321\n 1234321\n  12321\n   121\n    1

9char line 1_ 7char line 2_ 5char line 3_ 3char line 4_ 1char

(n*2)-1
\n


and for n = 11, it would be:

123456789010987654321
 1234567890987654321
  12345678987654321
   123456787654321
    1234567654321
     12345654321
      123454321
       1234321
        12321
         121
          1


 Test.assertEquals(getADownArrowOf(1), "1");
 Test.assertEquals(getADownArrowOf(3), "12321\n 121\n  1");
 Test.assertEquals(getADownArrowOf(5), "123454321\n 1234321\n  12321\n   121\n    1");
 */