/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [] 
    let arr = [],
        res = [],
        i = 0,
        index = 1,
        curLen = 1;
    arr.push(root)
    res[0] = new Array()
    while(arr.length){
        let cur = arr.shift()
        if(cur){
            cur.left && arr.push(cur.left)
            cur.right && arr.push(cur.right)
            res[i].push(cur.val)
        }
        if(index == curLen){
            curLen = arr.length
            index = 1
            i++
            res[i] = new Array()
        }else{
            index ++ 
        }
    }
    res.pop()
    for(let i =0;i<res.length;i++){
        if(i & 1){
            res[i].reverse()
        }
    }
    console.log(res)
    return res
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let A = new TreeNode(1)
A.left = new TreeNode(2)
A.right = new TreeNode(3)
A.left.left = new TreeNode(4)
A.right.right = new TreeNode(5)
// console.log(A)
// console.log(123)
levelOrder(A)