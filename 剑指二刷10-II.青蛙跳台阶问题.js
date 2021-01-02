/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(n <= 1){
        return 1
    }
    let a = 2, b = 1;
    for(let i = 0; i < n - 2; i++){
        [a, b] = [a + b, a]
        a = a % 1000000007
        b = b % 1000000007
    }
    return a
};