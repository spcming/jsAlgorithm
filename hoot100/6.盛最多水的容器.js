/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0,
        right = height.length - 1,
        resMax = 0
    while(left < right){
        resMax = Math.max(Math.min(height[left], height[right])*(right-left), resMax)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return resMax
};