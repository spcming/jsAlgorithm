// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 示例 1：

// 输入：n = 2
// 输出：2
// 示例 2：

// 输入：n = 7
// 输出：21
// 示例 3：

// 输入：n = 0
// 输出：1

// -----------------------------------------我的code，矩阵快速幂
const arr2=[[0,1],[1,1]]
const standard = 1e9+7
var numWays = function(n) {
    // 对 0 1 2进行特判
    if(n==0){
        return 1;
    }
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    // 快速矩阵幂算法
    let tempArr=[[1,2],[0,0]]
    for(let i=0;i<n-2;i++){
        tempArr=arrMulti(tempArr,arr2,2)
    }
    return(tempArr[0][1])%standard
};
// 矩阵乘法
let arrMulti=(arr1,arr2,n)=>{
    let arr3=[[],[]];
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            arr3[i][j]=0;
            for(let k=0;k<n;k++){
                arr3[i][j]+=(arr1[i][k]*arr2[k][j])%standard;
            }
        }
    }
    return arr3;
}



// ---------------------------------------------------------动态规划算法
var numWays2 = function(n) {
    if(n<=1) return 1; 
    let dp=[1,1,2];
    const Max=1e9+7;
    for(let i=2;i<=n;i++){
        dp[i]=(dp[i-1]+dp[i-2])%Max;
    }
    return dp[n];
 };
 
console.log(numWays(78))
