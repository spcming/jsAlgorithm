var cuttingRope = function(n) {
    if(n<=3){
        return n-1;
    }
    let k = n%3,
        num = Math.floor(n/3);
    if(k===1){
        return (3**(num-1))*4
    }else if(k===2){
        return (3**(num))*2
    }else{
        return 3**num
    }
};
console.log(cuttingRope(10))