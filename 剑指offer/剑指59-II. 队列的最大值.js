var MaxQueue = function() {
    this.queue = []
    this.deQueue = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.queue.length === 0){
        return -1
    }
    return this.deQueue[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)

    if(this.deQueue.length == 0){
        this.deQueue.push(value)
    }else{
        for(let i = this.deQueue.length - 1; i >= 0; i--){
            if(this.deQueue[i]>value){
                this.deQueue.splice(i+1,0,value)
                return
            }
        }
        this.deQueue.unshift(value)
    }
    
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length === 0){
        return -1
    }
    for(let i = 0; i < this.deQueue.length; i++){
        if(this.deQueue[i] === this.queue[0]){
            this.deQueue.splice(i,1)
        }
    }
    return this.queue.shift()
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */