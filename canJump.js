// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 /**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let lastIndex = nums.length - 1;

    for(let i = nums.length; i>=0; i--){

        if(i + nums[i] >= lastIndex)
        lastIndex = i;
    }
    
    return lastIndex == 0;
};