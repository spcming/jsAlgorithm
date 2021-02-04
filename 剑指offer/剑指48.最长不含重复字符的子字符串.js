/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1) return s.length
    let dp=[],
        dic={},
        max=1
    dp[0] = 1
    dic[s[0]]=0
    for(let i=1;i<s.length;i++){
        let cur = s[i]
        if(dic[cur]==undefined){
            space = Number.MAX_VALUE
        }else{
            space = i - dic[cur]
        }
        dic[cur] = i
        if(space<=dp[i-1]){
            dp[i] = space
        }else{
            dp[i] = dp[i-1] + 1
        }
        max = Math.max(max,dp[i])
    }
    return max
};
console.log(lengthOfLongestSubstring("aaba"))