class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result =[];
        function backtrack(openN, closedN, currentString){
            if(openN === n && closedN === n){
                result.push(currentString)
                return;
            }

            if(openN < n){
                backtrack(openN + 1, closedN , currentString + '(');
            }

            if(closedN < openN){
                backtrack(openN, closedN+1, currentString+')');
            }
        }
        backtrack(0,0,"")
        return result;
    }
}
