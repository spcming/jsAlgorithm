/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let number = 0
    function mergeSort(nums){
        if(nums.length==1){
            return nums
        }
        let mid = Math.floor(nums.length/2),
            left = nums.slice(0, mid),
            right = nums.slice(mid, nums.length)
        return merge(mergeSort(left), mergeSort(right))
    }

    function merge(left, right){
        let res = [],
            leftIndex = 0,
            rightIndex = 0
        while (leftIndex < left.length || rightIndex < right.length) {
            if(leftIndex == left.length){
                res.push(right[rightIndex])
                rightIndex ++
            } else if(rightIndex == right.length){
                res.push(left[leftIndex])
                leftIndex ++ 
            }else if(left[leftIndex] <= right[rightIndex]){
                res.push(left[leftIndex])
                leftIndex ++
            }else if(left[leftIndex] > right[rightIndex]){
                res.push(right[rightIndex])
                rightIndex ++
                number += left.length - leftIndex;
            }
        }
        return res
    }
    mergeSort(nums)
    return number
};

reversePairs([7,5,6,4])