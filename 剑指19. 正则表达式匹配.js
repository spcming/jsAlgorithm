/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let slen = s.length,
        plen = p.length,
        dp=new Array(slen+1);
    for(let i=0;i<slen+1;i++){
        dp[i]=new Array(plen+1).fill(false)
    }
    dp[0][0]=true;
    for(let i=1;i<=plen;i++){
        if(p[i-1]==='*'){
            dp[0][i]=dp[0][i-2];
        }
    }
    for(let i=1;i<=slen;i++){
        for(let j=1;j<=plen;j++){
            if(p[j-1]===s[i-1]||p[j-1]==='.'){
                dp[i][j]=dp[i-1][j-1]
            }else if(p[j-1]==='*'){
                if(p[j-2]===s[i-1]||p[j-2]==='.'){
                    dp[i][j] = dp[i][j-2]||dp[i-1][j]
                }else{
                    dp[i][j]=dp[i][j-2]
                }
            }
        }
    }
    return dp[slen][plen]
};
