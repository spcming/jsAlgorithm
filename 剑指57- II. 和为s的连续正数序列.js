/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    if(target <= 3){
        return null
    }

    let head = 1,
        tail = 2,
        res = []

    function getNum(head,tail){
        return (head + tail)*(tail - head + 1)/2
    }

    function getArr(head,tail){
        let res = []
        for(let i = head; i <= tail; i++){
            res.push(i)
        }
        return res
    }
    while(head<tail && tail<target){
        let num = getNum(head,tail)
        if(num < target){
            tail ++
        }else if(num > target){
            head ++
        }else {
            res.push(getArr(head,tail))
            tail ++
        }
    }
    return res
};
console.log(findContinuousSequence(9))