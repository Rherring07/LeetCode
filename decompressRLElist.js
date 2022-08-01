// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    let i = 0, j = 1;
  
    while(j < nums.length) {
      let freq = nums[i];
      for(let count = 0; count < freq; ++count) {
          result.push(nums[j]);
      }
       i += 2;
       j += 2;
    }
  
  
    return result;  
  };