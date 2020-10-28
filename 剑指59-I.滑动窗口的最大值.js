/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(!nums || !k) return []
    let queue = [],
        res = []
    for(let i = 0; i < k; i++){
        while(queue.length && queue[queue.length - 1]<nums[i]){
            queue.pop()
        }
        queue.push(nums[i])
    }
    res.push(queue[0])
    for(let i=k;i<nums.length;i++){
        if(nums[i-k]==queue[0]){
            queue.shift()
        }
        while(queue.length && queue[queue.length - 1]<nums[i]){
            queue.pop()
        }
        queue.push(nums[i])
        res.push(queue[0])
    }
    return res
};
maxSlidingWindow([1,-1],1)