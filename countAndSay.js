// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":


// Given a positive integer n, return the nth term of the count-and-say sequence.

 /**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1) return "1"
    let str = countAndSay(n-1)

    let res = ""
    let j = 0;
    for(let i =0; i<str.length;i++){
        while(str[i] == str[j]) j++

        res += j-i +str[i]
        i = j-1
    }
    return res;
};