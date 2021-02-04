/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let index = 0,
        res
    function fn(root){
        if(res != undefined) return res
        root.right && fn(root.right)
        index++
        if(index == k) {
            res =  root.val
        }
        root.left && fn(root.left)        
    }
    fn(root)
    let result = res
    return res
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let test = new TreeNode(3)
test.left = new TreeNode(1)
test.left.right = new TreeNode(2)
test.right = new TreeNode(4)
kthLargest(test,1)