/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function dfs(rootLeft, rootRight){
        let res = true
        if(rootLeft.val == rootRight.val){
            res = res && true
        }else{
            res = res && false
        }
        
        if(rootLeft.right == null && rootRight.left == null){
            res = res && true
        }else if(rootLeft.right == null || rootRight.left == null){
            res = res && false
        }else{
            res = res && dfs(rootLeft.right, rootRight.left)
        }

        if(rootLeft.left == null && rootRight.right == null){
            res = res && true
        }else if(rootLeft.left == null || rootRight.right == null){
            res = res && false
        }else{
            res = res && dfs(rootLeft.left, rootRight.right)
        }
        return res
    }
    if(root == null){
        return true
    }
    if(root.left == null && root.right == null){
        return true
    }else if(root.left == null || root.right == null){
        return false
    }
    return dfs(root.left,root.right)
};