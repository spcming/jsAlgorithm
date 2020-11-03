/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0,
        minArr = []
    for(let index in prices){
        if(index == 0){
            minArr[index] = prices[index]
        }else{
            minArr[index] = Math.min(minArr[index-1],prices[index])
            max = Math.max(max,prices[index] - minArr[index-1])
        }
        
    }
    return max;
};
console.log(maxProfit([7,1,5,3,6,4]))