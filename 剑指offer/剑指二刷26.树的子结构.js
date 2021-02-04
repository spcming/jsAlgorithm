/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(B==null || A == null){
        return false
    }
    let res = false
    function dfs1(root1,root2){
        if(root2 == null){
            return true
        }
        if(root1 == null){
            return false
        }
        if(root1.val == root2.val){
            return dfs1(root1.left, root2.left) && dfs1(root1.right, root2.right)
        }else{
            return false
        }
    }
    function dfs2(root){
        if(root == null){
            return
        }
        if(root.val == B.val){
            res = res || dfs1(root,B)
        }
        dfs2(root.left)
        dfs2(root.right)
    }
    dfs2(A)
    return res
};