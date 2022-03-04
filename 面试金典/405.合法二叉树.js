// 面试题 04.05. 合法二叉搜索树
// 实现一个函数，检查一棵二叉树是否为二叉搜索树。

// 示例 1:
// 输入:
//     2
//    / \
//   1   3
// 输出: true
// 示例 2:
// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
//      根节点的值为 5 ，但是其右子节点值为 4 。
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
 var isValidBST = function(root) {
    let p = root;
    let stack = []
    while(p){
        stack.push(p)
        p = p.left;
    }
    while(stack.length){
        let cur = stack.pop()
        if(cur.right){
            p = cur.right
            while(p){
                stack.push(p)
                p=p.left
            }
        }
        if(stack.length - 1 >= 0 && cur.val >= stack[stack.length - 1].val) return false
    }
    return true
};