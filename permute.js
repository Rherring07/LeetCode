// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []

    let iterate = (arr,temp) =>{
        if(arr.length == 0){
            res.push(temp)
            return;
        }
        for(let i =0;i<arr.length;i++){
            iterate(arr.filter((num,idx)=>idx !=i),[...temp,arr[i]])
        }
    }
    iterate(nums,[])
    return res
};