/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let h = 1,
        res = 0;
    for(let i = 0; i < 32; i++){
        let num = 0;
        for(let i = 0; i < nums.length; i ++){
            if(nums[i]&h){
                num++
            }
        }
        if(num%3!=0) res = res | h;
        h<<=1;
    }
    return res
};