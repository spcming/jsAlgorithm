/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let len = strs.length;
    if(strs.length == 0) return "";
    let str = strs[0];
    for(let i = 1; i < len; i++){
        let strArr = []
        for(let j = 0; j < strs[i].length; j++){
            if(strs[i][j] == str[j]){
                strArr.push(str[j])
            }else{
                break;
            }
        }
        str = strArr.join("")
    }
    return str;
};