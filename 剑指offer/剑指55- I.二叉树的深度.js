/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    let curDeep = 0,
        maxDeep = 0
    function fn(root){
        curDeep++
        root.right && fn(root.right)
        root.left && fn(root.left)
        maxDeep = Math.max(maxDeep,curDeep)
        curDeep--
    }
    fn(root)
    return maxDeep
};