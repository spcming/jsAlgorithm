
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0
var minArray = function(numbers) {
    // 数组去重
    let arr=[...new Set(numbers)]
    let length=arr.length,p=0,q=Math.ceil((length-1)/2);
    let preP;
    let hasCatch=false;
    // 判断是否进行了旋转
    if(arr[0]<arr[length-1]){
        return arr[0]
    }
    // 二分法查找
    while(p<q){
        if(arr[p]<arr[q]&&hasCatch==false){
            [p,q]=[q,q+Math.ceil((length-q)/2)];
        }
        if(arr[p]>arr[q]){
            hasCatch=true;
            preP=p;
            p=p+Math.ceil((q-p)/2);
        }
        if(arr[p]<arr[q]&&hasCatch==true){
            [p,q]=[preP,p]
        }
    }
    return arr[p];
};
console.log(minArray([2,2,2,0,1]))