// Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target.

// In case of a tie, return the minimum such integer.

// Notice that the answer is not neccesarilly a number from arr.

var findBestValue = function(arr, target) {
    const addSum = (mid) =>{
          let addsum = 0;
          for (let i=0; i<arr.length; i++){
                addsum += (arr[i]>mid)? mid : arr[i]; 
          }  
          return addsum;
    }   

    let l = 0, r = Math.max(...arr);
    let ans = 1;
    let diff = +Infinity;

    while (l<=r) {
         let mid = Math.floor((l+r)/2);
        if (addSum(mid) > target){
             r = mid-1;
        } else {
             l = mid+1;
        }

        if (Math.abs(addSum(mid)-target) < diff || Math.abs(addSum(mid)-target) === diff && mid<ans){
               ans = mid;
               diff = Math.abs(addSum(mid)-target);
        }

    }

    return ans;
};


