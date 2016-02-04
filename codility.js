function solution(A) {
    for (var i = 0; i < A.length; i++) {
        var before = A.slice(0,i) || [0];
        before = before.reduce(function(a,b){return a+b});
        var after = A.slice(i+1) || [0];
        after = after.reduce(function(a,b){return a+b});
        if (before === after) {
            return A[i];
        }
    }
    return -1;
}
