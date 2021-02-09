/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
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
    let i = 0, res=0
    let tableIndex = 0
    while(i < s.length){
        let tempStr = s.slice(i)
        if(tempStr.indexOf(table[tableIndex].value) === 0){
            res+=table[tableIndex].key
            i += table[tableIndex].value.length
        }else{
            tableIndex++
        }
    }
    return res
};