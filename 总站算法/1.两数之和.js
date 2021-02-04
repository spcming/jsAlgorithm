// 1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
var twoSum = function(nums, target) {
    // 将出现过的数字索引保存到一个对象上
    let prevNums={}
    for(let i=0;i<nums.length;i++){
        const curNum = nums[i];
        const targetNum = target - curNum;
        // 从prevNums中看是否能够获得targetNum的索引值
        const targetNumIndex = prevNums[targetNum]
        if(targetNumIndex==undefined) {
            prevNums[curNum] = i; // 如果判断当前没有目标值，那么将数据存放到prevNums中
        }else{
            return [targetNumIndex,i]
        }
    }
};