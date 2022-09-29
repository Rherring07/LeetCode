// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    
    var uniquePaths = function(m,n,memo ={}) {
        let pair = `${m}:${n}`;
        if(memo[pair]) return memo[pair];
        if(m === 0 || n === 0) return 0;
        if(obstacleGrid[m -1][n -1] == 1) return 0;
        if(m === 1 && n === 1 ) return 1;
        memo[pair] = uniquePaths(m-1,n,memo) + uniquePaths(m,n-1,memo);
        return memo[pair];
        };
    return uniquePaths(m,n);
};
