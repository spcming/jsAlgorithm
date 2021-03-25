/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits.length == 0) return []
    let phoneMap = {
        0:"", 1:"", 2:"abc", 3:"def", 
        4:"ghi", 5:"jkl", 6:"mno",
        7:"pqrs", 8:"tuv", 9:"wxyz"
    }
    let resArr = []
    function dfs(curStr, index){
        if(index == digits.length){
            resArr.push(curStr)
        }else{
            for(let i = 0; i < phoneMap[digits[index]].length; i++){
                dfs(curStr+phoneMap[digits[index]][i], index+1)
            }
        }
    }
    dfs("", 0)
    return resArr
};