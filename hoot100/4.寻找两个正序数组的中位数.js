/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [],
        len = nums1.length + nums2.length
    while(nums1.length != 0 && nums2.length!=0){
        if(!nums1.length){
            arr = arr.concat(nums2)
            nums2=[]
        }else if(!nums2.length){
            arr = arr.concat(nums1)
            nums1=[]
        }else{
            let curN1 = nums1[0],
                curN2 = nums2[0]
            if(curN1<curN2){
                arr.push(nums1.shift())
            }else{
                arr.push(nums2.shift())
            }
        }
    }
    if(len%2==0){
        return (arr[len/2] + arr[len/2-1])/2
    }else{
        return arr[(len-1)/2]
    }
};
findMedianSortedArrays([1,2],[3,4])