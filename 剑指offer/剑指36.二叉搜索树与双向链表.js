/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(!root) return root
    let head = null,
        pre = null
    function dfs(node){
        if(!node) return null
        dfs(node.left)
        if(!head){
            head = node
        }else{
            node.left = pre
            pre.right = node
        }
        pre = node
        dfs(node.right)
    }
    dfs(root)
    pre.right = head
    head.left = pre
    return head
};