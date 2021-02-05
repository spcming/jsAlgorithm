var lengthOfLongestSubstring = function(s) {
    let arr = [],
        max = 0
    for(let i = 0; i < s.length; i++){
        let index = arr.indexOf(s[i])
        if(index == -1){
            arr.push(s[i])
            max = Math.max(max, arr.length)
        }else{
            while(arr[0]!=s[i]){
                arr.shift()
            }
            arr.shift()
            arr.push(s[i])
            max = Math.max(max, arr.length)
        }
    }
    return max
};