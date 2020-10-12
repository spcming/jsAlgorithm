/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    nums.forEach((v,i) => {
        if(obj[v]){
            obj[v]++
        }else{
            obj[v] = 1
        }
    });
    for (key in obj){
        if(obj[key] > nums.length / 2){
            return key
        }
    }
};