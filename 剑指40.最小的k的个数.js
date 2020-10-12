/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    let arr2 = []
    arr.forEach((v)=>{
        arr2[v] ? arr2[v]++ : arr2[v] = 1
    })
    let num = 0,
        i = 0,
        res = []
    while(num<k){
        if(arr2[i]){
            let index = 0
            while(true){
                res.push(i)
                index++
                num++
                if(num==k || index == arr2[i]) break
            }
            i++
        }
        i++
    }
    console.log(res)
    return res
};
getLeastNumbers([1,2,3],2)