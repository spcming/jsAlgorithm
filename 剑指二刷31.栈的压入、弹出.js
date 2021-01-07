/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = []
    let index1 = 0,
        index2 = 0
    while(index1 < pushed.length){
        stack.push(pushed[index1])
        index1++
        while(popped[index2] === stack[stack.length - 1] && index2 < popped.length){
            stack.pop()
            index2++
        }   
    }
    if(stack.length){
        return false
    }
    return true
}; 