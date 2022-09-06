// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for(let i =0; i<board.length;i++){
        let rowMap = {}
        let colMap = {}
        let boxMap = {}
        for(let j=0; j<board[i].length;j++){

            let box = board[3* Math.floor(i/3) +Math.floor(j/3)][3*(i%3)+(j%3)]
            
            if(board[i][j] != '.'){
                if(rowMap[board[i][j]]) return false;
                rowMap[board[i][j]] = 1;
            }
            if(board[j][i] != '.') {
                if(colMap[board[j][i]]) return false;
                colMap[board[j][i]] = 1;
            }
            if(box!= '.'){
                if(boxMap[box]) return false;
                boxMap[box] = 1;
            }
        }
    }
    return true;
};