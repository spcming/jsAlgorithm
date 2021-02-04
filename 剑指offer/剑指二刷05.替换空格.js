/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let arr = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' '){
            arr.push('%20')
        }else{
            arr.push(s[i])
        }
    }
    return arr.join('')
};
replaceSpace( "We are happy.")