/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = []
    function fn(s,item){
        if(s.length == 1){
            item += s
            res.push(item)
            item = item.split('')
            item.pop()
            item = item.join('')
            return true
        }
        for(let i=0;i<s.length;i++){
            item += s[i]
            let newS = s
            newS = newS.split('')
            newS.splice(i,1)
            newS = newS.join('')
            fn(newS, item)
            item = item.split('')
            item.pop()
            item = item.join('')
        }
    }
    let item = ''
    fn(s,item)
    return res
};
permutation('abc')