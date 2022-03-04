// 面试题 04.06. 后继者
// 设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。

// 如果指定节点没有对应的“下一个”节点，则返回null。

// 示例 1:

// 输入: root = [2,1,3], p = 1

//   2
//  / \
// 1   3

// 输出: 2
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
 * @return {TreeNode}
 */
 var inorderSuccessor = function(root, p) {
    let cur = root;
    let pre = null;
    while(cur){
        if(cur.val > p.val){
            pre = cur;
            cur = cur.left;
        }else if(cur.val < p.val){
            cur = cur.right;
        }else {
            if(cur.right){
                pre = cur.right;
                while(pre.left){
                    pre = pre.left
                }
            }
            return pre
        }
    }
};