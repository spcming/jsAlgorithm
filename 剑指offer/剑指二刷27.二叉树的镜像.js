/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    let queue = []
    if(root==null){
        return root
    }
    queue.push(root)
    while(queue.length){
        let cur = queue.shift()
        let temp = cur.left
        cur.left = cur.right
        cur.right = temp
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
    }
    return root
};