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
    let res = false;
    // 判断在根节点相同时，A节点是否包含B节点
    function isSame(A,B){
        let sameRoot = (A.val === B.val);
        let sameLeft = B.left == null || isSame(A.left,B.left);
        let sameRight = B.right == null || isSame(A.right,B.right);
        return sameRoot && sameLeft && sameRight;
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
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let A = new TreeNode(6)
A.left = new TreeNode(4)
A.right = new TreeNode(5)
A.left.left = new TreeNode(1)
A.left.right = new TreeNode(2)

let B = new TreeNode(1)
// B.left = new TreeNode(1)

console.log(isSubStructure(A,B))