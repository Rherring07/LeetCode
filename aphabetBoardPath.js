// On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].

// Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.



// We may make the following moves:

// 'U' moves our position up one row, if the position exists on the board;
// 'D' moves our position down one row, if the position exists on the board;
// 'L' moves our position left one column, if the position exists on the board;
// 'R' moves our position right one column, if the position exists on the board;
// '!' adds the character board[r][c] at our current position (r, c) to the answer.
// (Here, the only positions that exist on the board are positions with letters on them.)

// Return a sequence of moves that makes our answer equal to target in the minimum number of moves.  You may return any path that does so.
/*
 * @lc app=leetcode id=1138 lang=javascript
 *
 * [1138] Alphabet Board Path
 */

// @lc code=start
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    var board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
    var map = new Array(128).fill([]);
    for (var i = 0; i < board.length; i++) {
        var line = board[i];
        for (var j = 0; j < line.length; j++) {
            map[board[i][j].charCodeAt()] = [i, j];
        }
    }

    var currentChar = 'a';
    var idx = 0;
    var resultArr = [];
    while (idx < target.length) {
        if (target[idx] !== currentChar) {
            var [fromX, fromY] = map[currentChar.charCodeAt()];
            var [toX, toY] = map[target[idx].charCodeAt()];
            if (fromX === 5) {
                resultArr.push('U'.repeat(fromX - toX));
                resultArr.push(fromY > toY ? 'L'.repeat(fromY - toY) : 'R'.repeat(toY - fromY));
            } else {
                resultArr.push(fromY > toY ? 'L'.repeat(fromY - toY) : 'R'.repeat(toY - fromY));
                resultArr.push(fromX > toX ? 'U'.repeat(fromX - toX) : 'D'.repeat(toX - fromX));
            }
        }
        currentChar = target[idx];
        resultArr.push('!');
        idx++;
    }
    return resultArr.join('');
};
// @lc code=end
 