/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let table = [
        {key:1000, value:'M'},
        {key:900, value:'CM'},
        {key:500, value:'D'},
        {key:400, value:'CD'},
        {key:100, value:'C'},
        {key:90, value:'XC'},
        {key:50, value:'L'},
        {key:40, value:'XL'},
        {key:10, value:'X'},
        {key:9, value:'IX'},
        {key:5, value:'V'},
        {key:4, value:'IV'},
        {key:1, value:'I'}
    ]
    let i = 0, res=''
    while(num > 0){
        if(num >= table[i].key){
            num-=table[i].key
            res+=table[i].value
        }else{
            i++
        }
    }
    return res
};