/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function dfs(i,j,k){
        if(i >= board.length || i < 0 || j >= board[0].length || j < 0){
            return false
        }
        if(board[i][j] === word[k] && k === word.length-1){
            return true
        }
        if(board[i][j] === word[k]){
            let temp = board[i][j]
            board[i][j] = ' '
            k++
            let res = dfs(i,j+1,k) || dfs(i,j-1,k) || dfs(i+1,j,k) || dfs(i-1,j,k)
            board[i][j] = temp
            return res
        }
        if(board[i][j] != word[k]){
            return false
        }
    }
    let answer = false
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            answer = answer || dfs(i,j,0)
        }
    }
    return answer
};