// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(c, target) {
    c.sort((a,b)=>a-b)
    let res = []

    let iterate = (index,sum,temp) =>{
        if(sum>target) return;
        if(sum == target){
            res.push(temp)
            return;
        }
        // 1 1 2 5 6 7 10 
        for(let i =index; i<c.length;i++){
            if(i != index && c[i] == c[i-1]) continue;
            iterate(i+1,sum+c[i],[...temp,c[i]])
        }
    }
    iterate(0,0,[])
    return res;
};