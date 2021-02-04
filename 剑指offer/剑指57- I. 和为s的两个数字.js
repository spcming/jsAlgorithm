/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!nums) return null
    let head = 0,
        tail = nums.length - 1
    while(head < tail){
        if(nums[head] + nums[tail] > target){
            tail --
        }else if(nums[head] + nums[tail] < target){
            head ++ 
        }else{
            return [nums[head],nums[tail]]
        }
    }
    return null
};