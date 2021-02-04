/**
 * @param {number[]} nums
 * @return {number}
//  */
// 找出数组中重复的数字。


// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 重点是长度为n，并且数字在 0-n-1 这里这个条件不能够浪费
var findRepeatNumber = function(nums) {
    for(let index in nums){
        while(index != nums[index]){
            if(nums[index] === nums[nums[index]]) {

                return nums[index]
            }
            [nums[index], nums[nums[index]]] = [nums[nums[index]], nums[index]];
        }
    }
};
findRepeatNumber([2, 3, 1, 0, 2, 5, 3])