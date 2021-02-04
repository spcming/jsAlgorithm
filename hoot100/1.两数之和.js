/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap={}
    for(let i = 0; i < nums.length; i++){
        let curNum = nums[i],
            targetNum = target - curNum,
            targetNumIndex = hashMap[targetNum]
        if(targetNumIndex!=undefined){
            return [targetNumIndex, i]
        }else{
            hashMap[curNum] = i
        }
    }
};