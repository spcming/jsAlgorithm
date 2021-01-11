/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.minHeap = []
    this.maxHeap = []
    this.maxAddItem = function(arr, item){
        arr.push(item)
        let i = arr.length - 1,
            fatherIndex = Math.floor((i-1)/2)
        while(arr[fatherIndex] < arr[i] && i > 0) {
            [arr[fatherIndex], arr[i]] = [arr[i], arr[fatherIndex]]
            i = fatherIndex
            fatherIndex = Math.floor((i-1)/2)
        }
    }
    this.minAddItem = function(arr, item){
        arr.push(item)
        let i = arr.length - 1,
            fatherIndex = Math.floor((i-1)/2)
        while(arr[fatherIndex] > arr[i] && i > 0) {
            [arr[fatherIndex], arr[i]] = [arr[i], arr[fatherIndex]]
            i = fatherIndex
            fatherIndex = Math.floor((i-1)/2)
        }
    }
    this.maxRemoveItem = function(arr){
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
        let item = arr.pop()
        let i = 0,
            leftChild = 2*i+1,
            rightChild = 2*(i+1)
        if(arr[rightChild] == undefined){
            rightChild = leftChild
        }
        while(arr[i]<Math.max(arr[leftChild], arr[rightChild]) && i < arr.length - 1){
            if(arr[leftChild]>arr[rightChild]){
                [arr[i], arr[leftChild]] = [arr[leftChild], arr[i]]
                i = leftChild
                leftChild = 2*i+1
                rightChild = 2*(i+1)
            }else{
                [arr[i], arr[rightChild]] = [arr[rightChild], arr[i]]
                i = rightChild
                leftChild = 2*i+1
                rightChild = 2*(i+1)
            }
            if(arr[rightChild] == undefined){
                rightChild = leftChild
            }
        }
        return item
    }
    this.minRemoveItem = function(arr){
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
        let item = arr.pop()
        let i = 0,
            leftChild = 2*i+1,
            rightChild = 2*(i+1)
        if(arr[rightChild] == undefined){
            rightChild = leftChild
        }
        while(arr[i]>Math.min(arr[leftChild], arr[rightChild]) && i < arr.length - 1){
            if(arr[leftChild]<arr[rightChild]){
                [arr[i], arr[ leftChild]] = [arr[leftChild], arr[i]]
                i = leftChild
                leftChild = 2*i+1
                rightChild = 2*(i+1)
            }else{
                [arr[i], arr[rightChild]] = [arr[rightChild], arr[i]]
                i = rightChild
                leftChild = 2*i+1
                rightChild = 2*(i+1)
            }
            if(arr[rightChild] == undefined){
                rightChild = leftChild
            }
        }
        return item
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let maxLen = this.maxHeap.length,
        minLen = this.minHeap.length
    if(minLen === maxLen){
        this.maxAddItem(this.maxHeap, num)
        this.minAddItem(this.minHeap, this.maxRemoveItem(this.maxHeap))
    }else{
        this.minAddItem(this.minHeap, num)
        this.maxAddItem(this.maxHeap, this.minRemoveItem(this.minHeap))
    }
    return null
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let maxLen = this.maxHeap.length,
        minLen = this.minHeap.length
    if(minLen === 0){
        return null
    }
    if(minLen === maxLen){
        return (this.maxHeap[0] + this.minHeap[0]) / 2
        console.log((this.maxHeap[0] + this.minHeap[0]) / 2)
    }else{
        return this.minHeap[0]
    }
    
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
let test = new MedianFinder()
test.addNum(155)
console.log(test.findMedian())
test.addNum(66)
console.log(test.findMedian())
test.addNum(114)
console.log(test.findMedian())
test.addNum(0)
console.log(test.findMedian())
test.addNum(60)
console.log(test.findMedian())
test.addNum(73)
console.log(test.findMedian())
test.addNum(109)
console.log(test.findMedian())
test.addNum(26)
console.log(test.findMedian())
test.addNum(154)
console.log(test.findMedian())
test.addNum(0)
console.log(test.findMedian())
test.addNum(107)
console.log(test.findMedian())
test.addNum(75)
console.log(test.findMedian())
test.addNum(9)
console.log(test.findMedian())
test.addNum(57)
console.log(test.findMedian())
test.addNum(53)
console.log(test.findMedian())
test.addNum(6)
console.log(test.findMedian())