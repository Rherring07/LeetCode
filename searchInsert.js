// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let low = 0,
        high = nums.length - 1;
    
    while(low <= high){
        let mid = Math.floor(low +(high-low)/2);
        
        if(nums[mid] == target){
            return mid;
        }
        else if (nums[mid] < target){
          low = mid + 1;
        }
        else{
           high = mid - 1;
        }
    }
    return low;
    
    
};


var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // we might need to inseart at the end
    while(lo < hi) { // breaks if lo == hi
        let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
        if (target > nums[mid]) {
            lo = mid + 1 // no way mid is a valid option
        } else {
            hi = mid // it might be possibe to inseart @ mid
        }
    }
    return lo;
};