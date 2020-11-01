/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let arr = []
    for(let i = 0; i < n; i++){
        arr[i] = i
    }
    let index = 0,
        num = 1;
    while(arr.length!=1){
        if(index == arr.length){
            index = 0
        }
        
        if(num%m === 0){
            arr.splice(index,1)
            num = 1
        }else{
            index++
            num++
        }
        
    }
    return arr[0]
};
lastRemaining(5,3)