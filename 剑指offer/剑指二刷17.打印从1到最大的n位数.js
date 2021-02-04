/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let res = [],
        num = []
    function dfs(x){
        if(x == n){
            res.push(num.join(''))
            return
        }
        for(let i = 0; i < 10; i++){
            if(x==0 && i == 0){
                num[x] = ''
            }else if(num[x-1]==='' && i == 0){
                num[x] = ''
            }else{
                num[x] = i
            }
            dfs(x + 1)
        }
    }
    dfs(0)
    res.shift()
    return res
};