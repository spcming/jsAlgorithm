// 面试题 01.07. 旋转矩阵
// 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

// 不占用额外内存空间能否做到？

 

// 示例 1:

// 给定 matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let maxIndex = matrix.length - 1;
    for(let i = 0; i <= Math.ceil(maxIndex / 2)-1; i++){
        for(let j = 0; j <= Math.ceil(maxIndex / 2)-1; j++){
            let x = i,y = j
            for(let k = 0; k < 3; k++){
                let p = maxIndex - x;
                let target = matrix[y][p]
                matrix[y][p] = matrix[i][j]
                matrix[i][j] = target
                x = y
                y = p
            }
            
        }
    }
    if(matrix.length % 2 !== 0){
        for(let i = 0; i < matrix.length/2; i++){
            let x = i,y = Math.floor(matrix.length/2)
            for(let k = 0; k < 3; k++){
                let p = maxIndex - x;
                let target = matrix[y][p]
                matrix[y][p] = matrix[i][Math.floor(matrix.length/2)]
                matrix[i][Math.floor(matrix.length/2)] = target
                x = y
                y = p
            }
        }
    }

    return matrix
};