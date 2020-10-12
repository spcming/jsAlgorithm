/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    n++
    let len = 1,
        min = 1,
        space = 1;
    while(true){
        space += min * 9 * len // 1+1*9*1=10 10+10*9*2=190
        if(n<=space) {
            space -= min *9 *len
            break   
        }
        len ++
        min *= 10
    }
    n-=space;
    let num = Math.ceil(n/len),
        a = n % len,
        tempStr = (min + num - 1).toString()
    if(a == 0){
        a = len
    }
    return tempStr.split('')[a-1]
};
findNthDigit(9)