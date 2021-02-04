// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */

// ------------------------------------------动态规划
var longestPalindrome = function(s) {
    // 思路：利用dp数组来保存从i到j是否为回文
    // if(s[i]===s[j]&&dp[i-1][j-1]){
    //     dp[i][j]=true
    // }
    if(!s || s.length<=1){
        return s
    }
    let dp=[],
        res = s[0]
    for(let i=s.length-1;i>=0;i--){
        dp[i]=[]
        for(let j=i;j<s.length;j++){
            if(i===j){
                dp[i][j]=true
            }else if(j-i===1 && s[i]===s[j]){
                dp[i][j]=true
            }else if(s[i]===s[j] && dp[i+1][j-1]){
                dp[i][j]=true
            }
            if(dp[i][j] && j-i+1>res.length){
                res = s.slice(i,j+1)
            }
        }
    }
    return res
};
console.log(longestPalindrome("babadada"))