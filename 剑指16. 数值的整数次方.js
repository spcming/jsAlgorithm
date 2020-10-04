/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x===0) return 0
    const isNegative = n < 0;
    n=Math.abs(n)
    let res=1;
    while(n){
        if(n&1){
            res=res*x;
        }
        x=x*x;
        n=Math.floor(n/2);
    }
    return isNegative ? 1/res : res
};
console.log(myPow(1500,1))
