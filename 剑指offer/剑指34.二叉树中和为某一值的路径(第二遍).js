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
    if(root == null){
        return []
    }
    let path = [],
        res = []
    function fn(root,sum,path,res){
        path.push(root.val)
        if(root.val === sum && root.left == null && root.right == null){
            res.push(JSON.parse(JSON.stringify(path)))
            path.pop()
            return true
        }else{
            let left = root.left && fn(root.left,sum-root.val,path,res),
                right = root.right && fn(root.right,sum-root.val,path,res);
            path.pop()
            return left || right
        }
    }
    fn(root,sum,path,res)
    return res
};