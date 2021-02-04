/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.data.push(num)
    this.data.sort((a,b)=>a-b)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.data.length & 1){
        return this.data[(this.data.length - 1) / 2]
    }else{
        return (this.data[this.data.length / 2] + this.data[this.data.length / 2 -1])/2
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */