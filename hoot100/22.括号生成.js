/**
 * @param {number} n
 * @return {string[]}
 */
//  22. 括号生成
//  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
var generateParenthesis = function(n) {
    let total_list = []
    total_list.push([null])
    total_list.push(["()"])
    for(let i = 2; i <= n; i++){ // p+q = i-1 求n=i时的数组
        let l = []
        for(let j = 0; j < i; j++){ // p=j,q=i-1-j
            let pList = total_list[j]
            let qList = total_list[i-1-j]
            for(let p of pList){
                for(let q of qList){
                    if(p == null) p = ""
                    if(q == null) q = ""
                    l.push(`(${p})${q}`)
                }
            }
        }
        total_list[i] = l
    }
    return total_list[n]
};
console.log(generateParenthesis(4))