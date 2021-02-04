/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    function pow(n,m){
        let res = 1;
        for(let i = 0; i < m; i++){
            res = res * n % 1000000007
        }
        return res % 1000000007
    }
    let num = Math.floor(n / 3),
        other = n % 3
    if(n == 2) return 1
    if(n == 3) return 2

    if(other == 1){
        return ((pow(3,num-1))*4)%1000000007
    }else if(other == 2){
        return ((pow(3,num))*2)%1000000007
    }else{
        return (pow(3,num))%1000000007
    }
};