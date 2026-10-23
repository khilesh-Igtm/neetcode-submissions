class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits) return [];
        const phoneMap = {
            "2": "abc", "3": "def", "4": "ghi", "5": "jkl", 
            "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
        }
        const res =[]
        const backtrack = (i, curStr) =>{
            if(curStr.length === digits.length){
                res.push(curStr)
                return;
            }
            const chars = phoneMap[digits[i]]
            for(const c of chars){
                backtrack(i+1, curStr+c)
            }
        }
        backtrack(0,"")
        return res;
    }
}
