// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // without inbuilt function
    let n = needle.length;
    let diffLen = haystack.length - n + 1;
     for(let i = 0; i < diffLen; i++){
             if(haystack.substr(i,n) == needle)
                 return i;
         }
         return -1;
 };