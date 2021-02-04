/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let row = 0,
        col = 0,
        length = matrix.length * (matrix[0].length),
        dirRow = 0,
        dirCol = 1,
        maxRow = matrix.length-1,
        maxCol = matrix[0].length-1,
        minRow = 1,
        minCol = 0,
        res = [];
    while(res.length < length){
        if(dirRow && (row + dirRow) > maxRow){
            dirRow = 0
            dirCol = -1
            maxRow -- 
        }
        if(dirCol && (col + dirCol) > maxCol){
            dirCol = 0
            dirRow = 1
            maxCol --
        }
        if(dirRow && (row + dirRow) < minRow){
            dirRow = 0
            dirCol =1
            minRow ++
        }
        if(dirCol && (col + dirCol) < minCol){
            dirCol = 0
            dirRow = -1
            minCol ++
        }
        res.push(matrix[row][col])
        row += dirRow
        col += dirCol
    }
    return res
};
spiralOrder([[1,2,3],[4,5,6],[7,8,9]])