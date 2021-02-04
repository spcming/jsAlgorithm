/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root){
        return []
    }
    let resArray = []
    function dfs(curRoot, arr, value){
        if(!curRoot.left && !curRoot.right && value + curRoot.val === sum){
            arr.push(curRoot.val)
            resArray.push(JSON.parse(JSON.stringify(arr)))
            arr.pop()
        } 
        if(curRoot.left) {
            arr.push(curRoot.val)
            value+=curRoot.val
            dfs(curRoot.left, arr, value)
            value -= curRoot.val
            arr.pop()
        } 
        if(curRoot.right) {
            arr.push(curRoot.val)
            value += curRoot.val
            dfs(curRoot.right, arr, value)
            value -= curRoot.val
            arr.pop()
        }
         
    }
    let arr = [],
        value = 0
    dfs(root, arr, value)
    return resArray
};