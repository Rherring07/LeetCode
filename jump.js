// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var output = 0
    var jump = 0
    var far = 0
    for(i=0;i<nums.length-1;i++){
        jump = Math.max(jump , nums[i] + i)
        if(i == far){
            far = jump
            output ++
        }
    }
    return output
};