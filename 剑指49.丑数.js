/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = [],
        i = 2,
        a = 1,
        b = 1,
        c = 1
    dp[1] = 1
    if(n<=5) return n 
    while(true){
        dp[i] = Math.min(dp[a]*2,dp[b]*3,dp[c]*5)
        if(i==n) return dp[i]
        dp[i]==dp[a]*2 && a++
        dp[i]==dp[b]*3 && b++
        dp[i]==dp[c]*5 && c++
        i++
    }
};