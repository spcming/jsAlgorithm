/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let votes = 0,
        x
    for(let item of nums){
        if(votes === 0){
            x = item
        }
        if(item === x){
            votes++
        } else {
            votes--
        }
    }
    return x
};