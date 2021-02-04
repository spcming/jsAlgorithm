/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let numsObj = {
        max:1,
        min:13
    }
    for(let value of nums){
        if(value != 0){
            if(numsObj[value] != undefined){
                return false
            }else{
                numsObj[value] = value
                numsObj.min > value ? numsObj.min = value : null
                numsObj.max < value ? numsObj.max = value : null
            }
        }
    }
    if(numsObj.max - numsObj.min < 5) return true
    return false
};