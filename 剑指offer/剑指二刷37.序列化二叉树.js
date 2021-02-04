/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root){
        return []
    }
    let queue = []
    queue.push(root)
    let arr = []
    while(queue.length){
        let cur = queue.shift()
        if(cur){
            arr.push(cur.val)
            queue.push(cur.left)
            queue.push(cur.right)
        } else {
            arr.push(null)
        }
    }
    while(arr[arr.length - 1] == null){
        arr.pop()
    }
    return arr
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data.length) {
        return null
    }
    let i = 1;
    let root = new TreeNode(data[0]),
        queue = []
    queue.push(root)
    if(data.length === 1){
        root.val = data[0]
        return root
    }
    while(i <= data.length / 2){
        p = queue.shift()
        let leftChild = new TreeNode(data[2*i - 1]),
            rightChild = new TreeNode(data[2*i])
        if(data[2*i - 1] != null) {
            p.left = leftChild
            queue.push(p.left)
        } 
        if(data[2*i] != null) {
            p.right = rightChild
            queue.push(p.right)
        } 
        i++
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
