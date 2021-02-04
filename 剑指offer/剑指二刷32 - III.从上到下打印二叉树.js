/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let queue = []
    queue.push(root)
    let i = 1,
        queLen = 1,
        j = 1,
        res = [],
        dir = 1
    res[j-1] = new Array()
    while(queue.length){
        let cur = queue.shift()
        if(dir === 1){
            res[j-1].push(cur.val)
        }else{
            res[j-1].unshift(cur.val)
        }
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
        if(i === queLen){
            queLen = queue.length
            i=1
            j++
            res[j-1] = new Array()
            dir *= -1
        }else{
            i++
        }
    }
    res.pop()
    return res
};