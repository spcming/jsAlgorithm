/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    let num = Math.floor(n / 3),
        other = n % 3
    if(n == 2) return 1
    if(n == 3) return 2
    if(other == 1){
        return (3 ** (num -1))*4
    }else if(other == 2){
        return (3**num)*2
    }else{
        return 3 ** num
    }
};