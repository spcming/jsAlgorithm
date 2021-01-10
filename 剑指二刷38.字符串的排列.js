/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    function dp(char, arr){
        let length = arr.length
        let resArr = []
        for(let i = 0; i < length; i++){
            let arrLen = arr[0].length
            for(let j = 0; j <= arrLen; j++){
                let item = arr[i].slice(0,j)+char+arr[i].slice(j)
                if(map[item]){
                    continue
                }
                resArr.push(item)
                map[item] = true
            }
        }
        return resArr
    }
    let res = []
    let map = {}
    if(!s.length){
        return []
    }
    res.push(s[0])
    for(let i = 1; i < s.length; i++){
        res = dp(s[i],res)
    }
    return res
};