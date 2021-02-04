/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums.length){
        return 0
    }
    let add = 0,
        res = 0,
        max = nums[0]
    for(let value of nums){
        add+=value
        if(add<0) add = 0
        res = Math.max(res,add)
        max = Math.max(max,value)
    }
    if(res===0) res=max;
    return res
};
console.log(maxSubArray([-1]))