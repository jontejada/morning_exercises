/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var objS = {};
    var objT = {};
    for (var i = 0; i < s.length; i++) {
        if (objS[s[i]] && objS[s[i]] !== t[i] || objT[t[i]] && objT[t[i]] !== s[i]) {
            return false;
        } else {
            objS[s[i]] = t[i];
            objT[t[i]] = s[i];
        }
    }
    return true;
};