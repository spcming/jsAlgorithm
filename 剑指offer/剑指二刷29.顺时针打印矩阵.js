/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length == 0){
        return []
    }
    let dir = 'right', // 0 1   1 0   0 -1   -1 0
        row = matrix.length - 1,
        col = matrix[0].length - 1,
        curRow = 0,
        curCol = 0,
        res = [],
        matrix2 = JSON.parse(JSON.stringify(matrix))
    for(let i = 0; i < (row+1)*(col+1); i++){
        res.push(matrix2[curRow][curCol])
        matrix2[curRow][curCol] = ' '
        if(dir === 'right'){
            if(curCol == col || matrix2[curRow][curCol+1] == ' '){
                dir = 'bottom'
                curRow++
            }else{
                curCol++
            }
        }else if(dir === 'bottom'){
            if(curRow == row || matrix2[curRow + 1][curCol] == ' '){
                dir='left'
                curCol--
            }else{
                curRow++
            }
        }else if(dir === 'left'){
            if(curCol == 0 || matrix2[curRow][curCol-1] == ' '){
                dir = 'top'
                curRow--
            }else{
                curCol--
            }
        }else if(dir === 'top'){
            if(curRow == 0 || matrix2[curRow-1][curCol] == ' '){
                dir = 'right'
                curCol++
            }else{
                curRow--
            }
        }
    }
    return res
};