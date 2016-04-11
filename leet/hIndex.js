/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var cArr = [];
    for (var i = 0; i < citations.length; i++) {
        for (var j = 0; j < citations[i] + 1; j++) {
            if (!cArr[j]) {
                cArr[j] = 1;
            } else {
                cArr[j]++;
            }
        }
    }
    for (var k = cArr.length - 1; k >= 0; k--) {
        if(cArr[k] >= k) return k;
    }
    return 0;
};