//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //nums are always positive
    //nums will always equal target
    //no decimals
    //two values CAN be the same
    
    
    //brute force
    //loop through array
//     for(let i = 0; i < nums.length; i++) {
//         //loop through the array again, comparing values to target
//         for(let j = 0; j < nums.length; j++) {
//             //if indexes are not the same and values add up to target, return array of indexes
//             if(j !== i && nums[i] + nums[j] === target) 
//                 return [i, j]
//         }
//     }
    
    //using a hashmap
    //hashmap
    let hash = new Map();
    //iterate over array
    for(let i = 0; i < nums.length; i++) {
        //stores current value for ease of reading
        const n = nums[i]
        //compares value to other values in hashmap
        if(hash.get(target - n) !== undefined) { //if hash has value such that n + value = target
            return [hash.get(target - n), i] //return [value, current index]
        }
        hash.set(n, i) //else, add the value to the hashmap
    }
};
