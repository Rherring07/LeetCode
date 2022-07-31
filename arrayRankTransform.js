// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.
var arrayRankTransform = function (arr) {
    var map = new Map();
    [...new Set(arr)].sort((a, b) => a - b).map((x, i) => map.set(x, i + 1));
    return arr.map((x) => map.get(x));
   };