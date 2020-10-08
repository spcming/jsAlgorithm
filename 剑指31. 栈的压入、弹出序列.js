/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = []
    for(let i=0;i<popped.length;i++){
        if(stack.length == 0){
            let pushIndex = pushed.indexOf(popped[i])
            if(pushIndex == -1){
                return false
            }else{
                for(let i=0;i<=pushIndex;i++){
                    stack.push(pushed.shift())
                }
            }
        }
        if(popped[i] == stack[stack.length - 1]){
            stack.pop()
        }else{
            let pushIndex = pushed.indexOf(popped[i])
            if(pushIndex == -1){
                return false
            }else{
                for(let i=0;i<=pushIndex;i++){
                    stack.push(pushed.shift())
                }
                stack.pop()
            }
        }
    }
    return true
};
console.log(validateStackSequences([1,2,3,4,5],[4,3,5,1,2]))