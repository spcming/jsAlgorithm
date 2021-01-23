/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = ""
    let i1 = num1.length - 1,
        i2 = num2.length - 1
    let y = 0 // 进位
    while(i1>=0 && i2 >=0){
        let curN1 = parseInt(num1[i1]),
            curN2 = parseInt(num2[i2])
        let curRes = curN1 + curN2 + y
        if(curRes>=10){
            y = parseInt(curRes/10)
            curRes = curRes%10
        }else{
            y = 0
        }
        res = curRes + res
        i1--
        i2--
    }
    if(i1<0 && i2<0){
        if(y > 0){
            res = y + res
        }
        return res
    }else if(i1<0){
        while(i2>=0){
            let cur = parseInt(num2[i2])
            let curRes = cur + y
            if(curRes>=10){
                y = parseInt(curRes/10)
                curRes = curRes % 10
            }else{
                y = 0
            }
            res = curRes + res
            i2--
        }
        if(y > 0){
            res = y + res
        }
        return res
    }else{
        while(i1>=0){
            let cur = parseInt(num1[i1])
            let curRes = cur + y
            if(curRes>=10){
                y = parseInt(curRes/10)
                curRes = curRes % 10
            }else{
                y = 0
            }
            res = curRes + res
            i1--
        }
        if(y > 0){
            res = y + res
        }
        return res
    }
};