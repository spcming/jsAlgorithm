/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    let stack = [],
        root = Number.MAX_VALUE;
    stack.push(postorder[postorder.length - 1]);
    for(let i = postorder.length - 2; i >= 0; i--){
        let cur = postorder[i]
        if(cur>root){
            return false
        }
        while(stack.length && postorder[i] < stack[stack.length - 1]){
            root = stack.pop()
        }
        stack.push(cur)
    }
    return true
};