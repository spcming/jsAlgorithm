/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    if(n>s.length){
        return s
    }
    let s1 = s.substring(0,n),
        s2 = s.substring(n)
    return s2+s1
};