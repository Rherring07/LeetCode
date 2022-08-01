// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

const replaceElements = arr => {
    const result = new Array(arr.length);
    result[arr.length - 1] = -1;
    
    for (let i = arr.length - 1; i > 0; i -= 1) {
        result[i - 1] = Math.max(arr[i], result[i]);
    }
    
    return result;
};