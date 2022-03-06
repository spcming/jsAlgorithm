// 面试题 04.08. 首个共同祖先
// 设计并实现一个算法，找出二叉树中某两个节点的第一个共同祖先。不得将其他的节点存储在另外的数据结构中。注意：这不一定是二叉搜索树。

// 例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]

//     3
//    / \
//   5   1
//  / \ / \
// 6  2 0  8
//   / \
//  7   4
// 示例 1:

// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出: 3
// 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let res;
    function dfs(root, p, q){
        if(!root) return false
        let lson = dfs(root.left, p,q);
        let rson = dfs(root.right, p,q);
        if((lson && rson) || ((root === p || root === q) && (lson || rson))) res = root;
        return lson || rson || root === p || root == q;
    }
    dfs(root,p,q)
    return res
};