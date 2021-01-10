/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    function create(arr){
        let i = arr.length - 1,
            fatherIndex = Math.floor((i+1)/2)-1
        while(arr[i]>arr[fatherIndex] && i > 0){
            let temp = arr[i]
            arr[i] = arr[fatherIndex]
            arr[fatherIndex] = temp
            i = fatherIndex
            fatherIndex = Math.floor((i+1)/2)-1
        }
    }
    function deleteItem(arr){
        let i = 0,
            leftChild = 2*i+1,
            rightChild = 2*(i+1);
        [arr[arr.length-1],arr[0]] = [arr[0],arr[arr.length - 1]]
        arr.pop()
        while(arr[i]<Math.max(arr[leftChild],arr[rightChild])){
            if(arr[leftChild]>arr[rightChild]){
                [arr[leftChild], arr[i]] = [arr[i], arr[leftChild]]
                i = leftChild
                leftChild = 2*i+1
                rightChild = 2*(i+1)
            }else{
                [arr[rightChild], arr[i]] = [arr[i], arr[rightChild]]
                i = rightChild
                leftChild = 2*i+1
                rightChild = 2*(i+1)
            }
        }
    }
    let res = []
    for(let i = 0; i < k; i++){
        res.push(arr[i])
        create(res)
    }
    console.log(res)
    for(let i = k; i < arr.length; i++){
        if(arr[i]<res[0]){
            deleteItem(res)
            res.push(arr[i])
            create(res)
        }
    }
    return res
};
getLeastNumbers([0,0,1,2,4,2,2,3,1,4],8)