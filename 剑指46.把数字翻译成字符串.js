var translateNum = function(num) {
    num = num.toString().split('')
    let dp=[]
    dp[0] = 0;
    dp[1] = 1;
    for(let i=2;i<=num.length;i++){
        cur = parseInt(num[i-1])
        prev = parseInt(num[i-2])
        value = prev * 10 + cur
        if(value <= 25 && value>=10){
            dp[i] = dp[i-2] + dp[[i-1]]
        }else{
            dp[i] = dp[i-1]
        }
    }
    return dp[num.length]
};
translateNum(18822)