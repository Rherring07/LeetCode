// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) return []

    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    let iterate = (nums) =>{
        let arr = []
        if(nums.length == 1) return map[nums];
        let first = nums.slice(0,1)
        let others = iterate(nums.slice(1))

        for(let i =0; i<map[first].length;i++){
            for(let j =0; j<others.length;j++){
                arr.push(map[first][i] + others[j])
            }
        }

        return arr;
    }

    return iterate(digits)
};