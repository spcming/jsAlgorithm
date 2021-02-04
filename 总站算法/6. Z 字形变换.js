/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 特判，当numRows为1时
    if(numRows===1) return s
    let rows=[]
    let loc = 0;
    let dir=-1;
    for(let i=0;i<s.length;i++){
        rows[loc] = (rows[loc]||"") + s[i]
        if(loc==0||loc==(numRows-1)){
            dir=-dir
        }
        loc+=dir
    }
    return rows.join("")
};
console.log(convert("PAYPALISHIRING",3))