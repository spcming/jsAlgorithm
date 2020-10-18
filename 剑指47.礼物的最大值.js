/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let row = grid.length,
        col = grid[0].length
    let dp=new Array(row)
    for(let i = 0; i < row; i++){
        dp[i] = new Array(col)
        if(i==0){
            dp[i][0] = grid[i][0]
        } else {
            dp[i][0] = dp[i-1][0] + grid[i][0]
        }
    }
    for(let i=1;i<col;i++){
        dp[0][i] = dp[0][i-1] + grid[0][i]
    }

    for(let i=1;i<row;i++){
        for(let j=1;j<col;j++){
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]) + grid[i][j]
        }
    }
    return dp[row-1][col-1]
};

console.log(maxValue(arr))