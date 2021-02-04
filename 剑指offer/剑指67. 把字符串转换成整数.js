/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    let isHead = true,
        index = 0,
        res = 0,
        sign, curStr, curNum;
    while(index < str.length){
        if(isHead && str[index] === ' '){
            index++;
            continue;
        }
        if(isHead && str[index] !== ' '){
            isHead = false;
            sign = str[index];
            if(sign!='+'&&sign!='-'){
                if(sign>='0'&& sign<='9'){
                    curStr = sign;
                    sign = ' ';
                    curNum = curStr - '0';
                    res = res*10 + curNum;
                }else{
                    return 0
                }
            }
            index++;
            continue;
        }
        if(str[index] < '0' || str[index] > '9'){
            break;
        }else{
            curStr = str[index];
            curNum = curStr - '0';
            res = res*10 + curNum;
            index++;
        }
    }
    
    if(sign == '-'){
        if(res > 2147483648){
            res = 2147483648;
        }
        return -res;
    }else{
        if(res > 2147483647){
            res = 2147483647;
        }
        return res
    }
};