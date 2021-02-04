/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let queue = {}
    for(let i=0;i<s.length;i++){
        let cur = s[i]
        if(queue[cur]==undefined){
            queue[cur]=i
        }else{
            queue[cur]=s.length
        }
    }
    let res={value:" ",index:s.length}
    for(let key in queue){
        if(queue[key]<res.index){
            res.value=key
            res.index=queue[key]
        }
    }
    return res.value
};