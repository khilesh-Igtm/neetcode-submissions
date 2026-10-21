class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []
        function generateAll(currentString){
            if(currentString.length === 2*n){
                if(isValid(currentString)){
                    result.push(currentString)
                }
                return;
            }
            generateAll(currentString + '(');
            generateAll(currentString + ')');
        }
        function isValid(str){
            let balance =0;
            for(let i=0;i<str.length;i++){
                if(str[i] === '(') balance += 1;
                else balance -= 1;
                if(balance < 0) return false;
            }
            return balance === 0;
        }
        generateAll("")
        return result;
    }
}
