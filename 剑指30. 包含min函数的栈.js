/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.data.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    let min = this.data[0]
    for(let i=0;i<this.data.length;i++){
        min = Math.min(min,this.data[i])
    }
    return min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */