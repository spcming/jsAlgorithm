/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    function pow(x,y){
        if(y==0){
            return 1;
        }
        let n=x;
        for(let i=1;i<y;i++){
            x=(x*n)%standard;
        }
        return x
    }
    if(n<=3){
        return n-1
    }
    let standard = 1000000007;
    let k = n%3,
        num = Math.floor(n/3);
    if(k===0){
        return pow(3,num)%standard
    }else if(k===1){
        return (pow(3,num-1)%standard)*4%standard
    }else if(k===2){
        return (pow(3,num)%standard)*2%standard
    }
};
console.log(cuttingRope(4))