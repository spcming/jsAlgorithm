/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    if(!nums || nums.length < 2){
        return nums
    }
    let a1 = nums.length, a2 = nums.length;
    for(let i = nums.length - 1; i >= 0; i--){
        if (nums[i - 1] < nums[i] && a1 === nums.length) {
            a1 = i - 1;
            i = nums.length;
        }
        if (a1 !== nums.length && nums[i] > nums[a1]) {
            a2 = i;
            break;
        }
    }
    if(a1 === nums.length){
        quickSort(nums, 0, nums.length - 1);
    } else {
        sort(nums, a1, a2);
    }
    return nums;

};
function quickSort (arr, i, j) {
    if(i < j){
        let guard = getGuard(arr, i, j);
        arguments.callee(arr, i, guard - 1);
        arguments.callee(arr, guard + 1, j);
    }
}
function getGuard (arr, start, end) {
    let pivot = arr[end];
    let i = start;
    for (let j = start; j < end; j++) {
        if(arr[j] < pivot){
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, end);
    return i;
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(arr, i, j){
    swap(arr, i, j);
    quickSort(arr, i + 1, arr.length - 1)
}


console.log(nextPermutation([1,3,2]))