/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let pre = 0,
        next = 1;
    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    for(let i = 0; i < n - 1; i++){
        let temp = next;
        next = pre + next;
        prev = temp;
    }
    return next
};
fib(3)