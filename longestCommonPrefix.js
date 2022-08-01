// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
    let i = 1;
    let prf = arr[0];
    while(i < arr.length){
        if(!arr[i].startsWith(prf)){
            prf = prf.slice(0, -1)
        }else{
            i++
        }
    }
    return prf


};

// ""