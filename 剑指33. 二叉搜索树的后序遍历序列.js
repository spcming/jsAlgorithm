/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    let prev = 0,
        next = 2;
    while(next<postorderlength){
        let left = postorder[prev],
            root = postorder[next],
            right = postorder[prev + 1]
        if(!(left < root && root < right)){
            return false
        }
        prev +=2
        next +=2
    }
    return true
};

verifyPostorder([4, 8, 6, 12, 16, 14, 10])
