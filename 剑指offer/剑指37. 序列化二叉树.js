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
    if(!root) return []
    let queue = [],
        res = [];
    queue.push(root)
    while(queue.length){
        let cur = queue.shift()
        if(cur){
            res.push(cur.val)
            queue.push(cur.left)
            queue.push(cur.right)
        }else{
            res.push(cur)
        }
    }
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data.length) return null
    let queue = [new TreeNode(data[0])],
        index = 1,
        res = queue[0];
    while(queue.length && index < data.length){
        let cur = queue.shift()
        let left = data[index++],
            right = data[index++];
        if(left != null) cur.left = new TreeNode(left)
        if(right != null) cur.right = new TreeNode(right)
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
    }
    return res
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

deserialize([1,2,3,null,null,4,5])