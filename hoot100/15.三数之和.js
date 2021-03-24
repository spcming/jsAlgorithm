
 var threeSum = function(nums) {
    let result = []
    nums.sort((a,b)=>a-b)
    for(let k = 0; k < nums.length - 2; k++){
        if(nums[k] > 0) break;
        if(k > 0 && nums[k] == nums[k-1]) continue;
        let i = k+1, j = nums.length - 1
        while(i < j){
            let sum =  nums[k] + nums[i] + nums[j]
            if(sum < 0){
                while(i < j && nums[i] == nums[++i]);
            }else if(sum > 0){
                while(i < j && nums[j] == nums[--j]);
            }else {
                result.push([nums[k], nums[i], nums[j]])
                while(i < j && nums[i] == nums[++i]);
                while(i < j && nums[j] == nums[--j]);
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))