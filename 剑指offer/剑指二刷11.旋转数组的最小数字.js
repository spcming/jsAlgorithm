/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let head = 0,
        tail = numbers.length - 1
    while(head < tail){
        mid = Math.floor((head + tail) / 2)
        if(numbers[mid] > numbers[tail]){
            head = mid + 1
        }else if(numbers[mid] < numbers[tail]){
            tail = mid
        }else if(numbers[mid] == numbers[tail]){
            tail --
        }
    }
    return numbers[head]
};  
minArray([0,0,0,0,0,0])