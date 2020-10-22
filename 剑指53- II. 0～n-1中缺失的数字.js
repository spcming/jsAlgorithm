/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let head = 0,tail = nums.length - 1,
        mid = Math.floor((head + tail)/2)
    if(nums[nums.length - 1] == nums.length -1) return nums.length
    while(head < tail){
        if(nums[mid] == mid) {
            head = mid + 1
        }
        if(nums[mid] == mid + 1){
            tail = mid
        }
        mid = Math.floor((head + tail)/2)
    }
    return head
};

console.log(missingNumber([0,2]))