/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let index = 0;
    for(let i = 0; i < n - 1; i++){
        index = (index + m)%(2+i)
    }
    return index
};
console.log(lastRemaining(5,3))