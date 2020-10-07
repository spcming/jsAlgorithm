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
    // 判断两个数是否相等
    function isSame(A,B){
        if(A && B){
            let rootSame = A.root === B.root,
                leftSame = isSame(A.left, B.right),
                rightSame = isSame(A.right, B.left);
            return rootSame && leftSame && rightSame
        }else if((!A && B) || (A && !B)){
            return false
        }else return true
    }
    if(!root) return true
    return isSame(root.left,root.right)
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
isSymmetric(root)