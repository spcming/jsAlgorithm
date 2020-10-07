/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(!B){
        return false;
    }
    let res = false;
    // 判断在根节点相同时，A节点是否包含B节点
    function isSame(A,B){
        if(A){
            let sameRoot = (A.val === B.val);
            let sameLeft = B.left == null || isSame(A.left,B.left);
            let sameRight = B.right == null || isSame(A.right,B.right);
            return sameRoot && sameLeft && sameRight;
        }else{
            return false
        }
    }

    function readTree(a,func){
        if(a){
            func(a)
            readTree(a.left,func)
            readTree(a.right,func)
        }
    }

    readTree(A,(a)=>{
        if(a.val == B.val){
            if(isSame(a,B)){
                res =  true
            }
        }
    })
    return res
};