/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let arr = []
    for(let i =0;i<nums.length;i++){
        if(nums[i]&1){
            arr.unshift(nums[i])
        }else{
            arr.push(nums[i])
        }
    }
    return arr
};