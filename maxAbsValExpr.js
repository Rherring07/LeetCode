// Given two arrays of integers with equal lengths, return the maximum value of:

// |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

// where the maximum is taken over all 0 <= i, j < arr1.length.

const maxAbsValExpr = (arr1, arr2) => {
    const l1 = [], l2 = [], l3 = [], l4 = [], res = [];
    
    for (let i = 0; i < arr1.length; i++) {
        l1.push(arr1[i] + arr2[i] + i)
        l2.push(arr1[i] - arr2[i] + i)
        l3.push(-arr1[i] + arr2[i] + i)
        l4.push(-arr1[i] - arr2[i] + i)
    }
    
    res.push(Math.max(...l1) - Math.min(...l1))
    res.push(Math.max(...l2) - Math.min(...l2))
    res.push(Math.max(...l3) - Math.min(...l3))
    res.push(Math.max(...l4) - Math.min(...l4))
    
    return Math.max(...res);
};