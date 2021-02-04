// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

//  

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1
// 提示：

// 1 <= n,m <= 100
// 0 <= k <= 20

// --------------------------------------------深度优先算法 
var movingCount1 = function(m, n, k) {
    let f = (i,j,k,visit)=>{
        let i2 = i%10
        let i1 = (i-i2)/10
        let j2 = j%10
        let j1 = (j-j2)/10
        let key = `${i}-${j}`
        
        if(
            i1+i2+j1+j2>k||
            i<0||
            j<0||
            i>=m||
            j>=n||
            visit[key]==true
        ){
            return false
        }
        visit[key]=true;
        num++
        f(i-1,j,k,visit)
        f(i+1,j,k,visit)
        f(i,j-1,k,visit)
        f(i,j+1,k,visit) 
    }
    let num=0;
    let visit={}
    f(0,0,k,visit)
    return num
};

// --------------------------------------------广度优先算法
var movingCount = function(m,n,k){
    // 位数和
    function getSum (num) {
        let strArr = num.toString.split('')
        return strArr.reduce((a,b)=>Number(a)+Number(b),0)
    }
    // 方向数组
    const directionAry = [
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ]

    // 已经走过的坐标
    let set  = new Set(['0-0'])

    // 将遍历的坐标队列，题意要求从[0,0]开始走
    let queue=[[0,0]]

     // 遍历队列中的坐标
    while(queue.length){
         // 移除队首坐标
        let [x,y]=queue.shift()

         // 遍历方向
        for(let i=0;i<4;i++){
            let offsetX = x + directionAry[i][0]
            let offsetY = y + directionAry[i][1]

             // 临界值判断
            if(
                offsetX<0||
                offsetY<0||
                offsetX>=m||
                offsetY>=n||
                getSum(offsetX) + getSum(offsetY)>k||
                set.has(`${offsetX}-${offsetY}`)
            ){
                continue
            }

            // 走过的格子就不再纳入统计
            set.add(`${offsetX}-${offsetY}`)

            // 将该坐标加入队列（因为这个坐标的四周没有走过，需要纳入下次的遍历）
            queue.push([offsetX,offsetY])
        }
    }

    // 走过坐标的个数就是可以到达的格子数
    return set.size
}