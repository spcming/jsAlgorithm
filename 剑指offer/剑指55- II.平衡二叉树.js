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
var isBalanced = function(root) {
    let res = true
    function fn(root){
        if(!root) return 0
        let left = fn(root.left),
            right = fn(root.right)
        if(left == -1 || right == -1) return -1
        if(Math.abs(left - right) <= 1){
            return Math.max(left,right) + 1
        }else{
            return -1
        }
    }
    res = fn(root)
    if(res != -1) return true
    else return false
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let test = new TreeNode(1)
test.left = new TreeNode(2)
test.right = new TreeNode(2)
test.left.right = new TreeNode(3)
test.left.left = new TreeNode(3)
test.left.left.left = new TreeNode(4)
test.left.left.right = new TreeNode(4)
console.log(isBalanced(test))