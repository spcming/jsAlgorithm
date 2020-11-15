/**
 * @param {number[]} nums
 * @return {number}
 */
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