/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let ret = 0,
        h = 1,
        a1 = 0,
        a2 = 0;
    for(let n of nums){
        ret ^= n
    }
    while((ret & h) == 0){
        h<<=1;
    }
    
    for(let n of nums){
        // console.log(a1,a2)
        if((n & h) == 0){
            a1 ^= n
        }else{
            a2 ^= n
        }
    }
    return [a1,a2]
}; 
console.log(singleNumbers([1,2,5,2]))