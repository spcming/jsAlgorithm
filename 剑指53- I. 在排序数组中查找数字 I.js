/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length ==0) return 0
    let flag,first=0,end;
    end = nums.length-1
    flag = Math.ceil((end - first)/2)
    while(nums[flag] != target){
        if(nums[flag]>target){
            end = flag
        }else if(nums[flag]<target){
            first = flag
        }
        flag = first + Math.ceil((end - first)/2)
        if(nums[end] == target){
            flag = end
            break
        }else if(nums[first] == target){
            flag = first
            break
        }else if(end - first <= 1) return 0
    }
    let head=flag,
        tail = flag
    while(nums[head-1]==target || nums[tail+1]==target){
        if(nums[head-1]==target) head--
        if(nums[tail+1]==target) tail++
    }
    return tail-head+1
};
console.log(search([50,4],4))