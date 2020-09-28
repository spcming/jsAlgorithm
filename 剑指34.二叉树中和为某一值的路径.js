// 剑指 Offer 34. 二叉树中和为某一值的路径
// 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 

// 示例:
// 给定如下二叉树，以及目标和 sum = 22，

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// 返回:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]


let finalList

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var pathSum = function(root, sum) {
    let nowList=[];
    let nowValue=0;
    finalList=[]
    f(root,nowValue,nowList,sum);
    return finalList;
};
let f = function(root,nowValue,nowList,sum){
    if(root==null) {
        return false
    }
    nowValue += root.val;
    nowList.push(root.val);
    if(root.left==null&&root.right==null){
        if(nowValue == sum){
            finalList.push(JSON.parse(JSON.stringify(nowList)))
            nowList.pop()
            return true
        }else{
            nowList.pop()
            return false
        }
    }
    let a1=root.left==null?false:f(root.left,nowValue,nowList,sum)
    let a2=root.right==null?false:f(root.right,nowValue,nowList,sum)
    nowList.pop()
    return a1||a2;
}
let root = new TreeNode(5)
root.left=new TreeNode(4)
root.right=new TreeNode(8)
root.left.left =new TreeNode(11)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)
root.left.left.left =new TreeNode(7)
root.left.left.right =new TreeNode(2)
root.right.right.left = new TreeNode(5)
root.right.right.right = new TreeNode(1)
console.log(pathSum(root,22))
