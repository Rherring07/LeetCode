// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 /**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []

    let iterate = (str, open, close) =>{
        if(open > n || close >n || close >open) return;
        if(str.length == n *2 && open ==close){
            res.push(str)
            return;
        }
        iterate(str +'(',open+1,close)
        iterate(str + ')', open, close+1)
    }

    iterate('',0,0)
    return res;
};