/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let listMap = {
        "(" : 0,
        "[" : 1,
        "{" : 2
    }
    let rightMap = {
        ")" : 0,
        "]" : 1,
        "}" : 2
    }
    let stack = []
    for(let i = 0; i < s.length; i++){
        let curValue = s[i],
            isLeftPart = listMap.hasOwnProperty(curValue)
        if(stack.length == 0 && isLeftPart){
            stack.push(curValue)
        }else if(stack.length == 0 && !isLeftPart){
            return false
        }else if(isLeftPart){
            // if(listMap[stack[stack.length - 1]] < listMap[curValue]){
            //     return false
            // }else{
                stack.push(curValue)
            // }
        }else {
            if(listMap[stack[stack.length - 1]] == rightMap[curValue]){
                stack.pop()
            }else{
                return false
            }
        }
    }
    if(stack.length == 0) return true
    else return false
};