/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0){
        return 1
    }
    let flag = false
    if(n < 0) {
        flag = true
        n *= -1
    }
    let other = 1;
    while(n!=1){
        if(n % 2 == 0){
            x*=x
            n/=2
        }else {
            other *= x;
            x *= x
            n = Math.floor(n/2)
        }
    }
    if(flag){
        return 1 / (x*other)
    }else{
        return x*other
    }

};