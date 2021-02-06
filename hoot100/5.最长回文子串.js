/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let dp = []
    let res = s[0]
    for(let i = s.length-1; i >=0 ; i--){
        dp[i] = []
        for(let j = i; j < s.length; j++){
            if(i == j){
                dp[i][j]=true
            }else if(s[i] == s[j] && (dp[i+1][j-1]|| i+1==j)){
                dp[i][j] = true
            }
            if(dp[i][j] && j-i+1 > res.length){
                res = s.slice(i,j+1)
            }
        }
    }
    return res
};