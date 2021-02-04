/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let head = 0, tail = nums.length - 1;
    while(head<tail){
        if(nums[head]%2==0 && nums[tail]%2!=0){
            let temp = nums[head]
            nums[head] = nums[tail]
            nums[tail] = temp
        }
        if(nums[head]%2!=0){
            head ++
        }
        if(nums[tail]%2==0){
            tail --
        }
    }
    return nums
};