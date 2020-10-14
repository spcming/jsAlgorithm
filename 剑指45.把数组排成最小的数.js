/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort((x,y)=>{
        return parseInt(''+x+y)-parseInt(''+y+x)
    })
    return nums.join('')
};