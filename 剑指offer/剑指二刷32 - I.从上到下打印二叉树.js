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
    let queue = [],
        res = []
    if(!root){
        return []
    }
    queue.push(root)
    while(queue.length){
        let cur = queue.shift()
        res.push(cur.val)
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
    }
    return res
};