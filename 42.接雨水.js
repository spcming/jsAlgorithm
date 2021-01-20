/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0
    let lmax = 0, rmax = 0,
        left = 0, right = height.length - 1
    while(left < right){
        if(height[left] < height[right]){
            if(lmax < height[left]) lmax = height[left]
            else res+=(lmax - height[left])
            left++
        }else{
            if(rmax < height[right]) rmax = height[right]
            else res+=(rmax - height[right])
            right -- 
        }
    }
    return res
};