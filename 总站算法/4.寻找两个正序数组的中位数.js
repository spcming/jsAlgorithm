// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

// 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？

//  

// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 示例 3：

// 输入：nums1 = [0,0], nums2 = [0,0]
// 输出：0.00000
// 示例 4：

// 输入：nums1 = [], nums2 = [1]
// 输出：1.00000
// 示例 5：

// 输入：nums1 = [2], nums2 = []
// 输出：2.00000

var findMedianSortedArrays = function(nums1, nums2) {
    let arr=[]
    while(nums1.length>0&&nums2.length>0){
        if(nums1[0]<=nums2[0]){
            arr.push(nums1[0])
            nums1.shift()
        }else{
            arr.push(nums2[0])
            nums2.shift()
        }
    }
    arr = arr.concat(nums1,nums2)
    let length = arr.length;
    if(length%2==0){
        return (arr[length/2-1] + arr[length/2])/2
    }else{
        return arr[Math.ceil(length/2-1)]
    }
};
