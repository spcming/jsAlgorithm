/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let rootArr = []
    let res = []
    rootArr.push(root)
    while(rootArr.length){
        let current  = rootArr.shift()
        current.left && rootArr.push(current.left)
        current.right && rootArr.push(current.right)
        res.push(current.val)
    }
    return res
};