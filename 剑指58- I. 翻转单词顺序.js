/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let resStr = '',
        head,
        tail;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i]==' ' && s[i-1] != ' '){
            tail = i
        }
        if(s[i] != ' ' && s[i-1] == ' '){
            head = i
            resStr += s.substring(head,tail) + ' '
        }
        if(s[i] != ' ' && i == 0){
            head = i
            resStr += s.substring(head,tail)
        }
    }
    return resStr.trim()
};