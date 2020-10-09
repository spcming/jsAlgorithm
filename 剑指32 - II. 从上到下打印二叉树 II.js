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
    let arr = [],
        res = [],
        lenQue = 1,
        i = 1,
        j=0;
    arr.push(root)
    res[0] = new Array()
    while(arr.length){
        let cur = arr.shift()
        if(cur){
            cur.left && arr.push(cur.left)
            cur.right && arr.push(cur.right)
            res[j].push(cur.val)
        }
        if(i == lenQue){
            lenQue = arr.length
            i = 1
            j++
            res[j] = new Array()
        }else{
            i++
        }
    }
    for(let j = 0;j < res.length;j++){
        if(res[j].length == 0){
            res.splice(j,1)
            j--;
        }
    }
    console.log(res)
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let A = new TreeNode(3)
A.left = new TreeNode(9)
A.right = new TreeNode(20)
A.right.left = new TreeNode(15)
A.right.right = new TreeNode(7)
// console.log(A)
// console.log(123)
levelOrder(A)