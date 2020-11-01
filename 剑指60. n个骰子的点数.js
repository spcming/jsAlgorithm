/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
    let arr = new Array(n+1)
    arr[1] = new Array(6*n+1).fill(0)
    for(let i=1;i<7;i++){
        arr[1][i] = 1;
    }
    for(let i = 2; i < n+1; i++){
        arr[i] = new Array(6*n+1).fill(0)
        for(let j = i;j < i*6+1; j++){
            for(let k = 1; k < 7 ; k++){
                if(j-k>0){
                    arr[i][j] += arr[i-1][j-k]
                }
            }
        }
    }
    let length = 6*n+1
    for(let i = 0; i < length; i++){
        arr[n][i] /= 6 ** n
        if(arr[n][i] === 0){
            arr[n].splice(i,1)
            i--
            length--
        }
    }
    return arr[n]
};
console.log(twoSum(2))