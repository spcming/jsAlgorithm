/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count = 0,
        visited = Array.from({length:m},()=>new Array(n).fill(0))
    function dfs(mm,nn){
        if(mm < 0 || mm >= m || nn < 0 || nn >= n) return
        if(visited[mm][nn]) return 
        visited[mm][nn] = 1
        let mShi = mm / 10,
            mGe = mm % 10,
            nShi = nn / 10,
            nGe = nn % 10
        if(mShi + mGe + nShi + nGe <= k){
            count++
            dfs(mm-1,nn)
            dfs(mm+1,nn)
            dfs(mm,nn-1)
            dfs(mm,nn+1)
        }
    }
    dfs(0,0)
    return count
};
movingCount(1,2,1)