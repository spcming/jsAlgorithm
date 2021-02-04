/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let board = [["F","Y","C","E","N","R","D"],["K","L","N","F","I","N","U"],["A","A","A","R","A","H","R"],["N","D","K","L","P","N","E"],["A","L","A","N","S","A","P"],["O","O","G","O","T","P","N"],["H","P","O","L","A","N","O"]]
let word = "poland"
var exist = function (board, word) {
    let row = board.length;
    let col = board[0].length;
    let result;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0]) {
                result = __exist(board, word, i, j, {})
            }
            if (result) return true
        }
    }
    return false


};
function __exist(board, word, row, col, visited) {
    if (!word) return true;
    let key = `${row}-${col}`
    if (
        row < 0 ||
        col < 0 ||
        row >= board.length ||
        col >= board[0].length ||
        visited[key] ||
        board[row][col] !== word[0]
    ) return false
    visited[key]=true
    word = word.slice(1)
    let success = 
    __exist(board,word,row-1,col,visited)||
    __exist(board,word,row+1,col,visited)||
    __exist(board,word,row,col-1,visited)||
    __exist(board,word,row,col+1,visited)
    visited[key] = success;
    return success;
}
console.log(exist(board, word))