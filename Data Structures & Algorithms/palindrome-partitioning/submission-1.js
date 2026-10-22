class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const n = s.length;
        const result =[];
        const currentPartition =[]

        const dp = Array.from({length: n}, ()=> Array(n).fill(false));

        for(let i = n-1; i>=0;i--){
            for(let j =i;j<n;j++){
                if(s[i] === s[j] && (j-i <=2 || dp[i+1][j-1])){
                    dp[i][j] = true;
                }
            }
        }
        const backtrack = (startIndex)=>{
            if(startIndex >= n){
                result.push([...currentPartition])
                return;
            }
            for(let endIndex = startIndex; endIndex <n; endIndex++){
                if(dp[startIndex][endIndex]){
                    currentPartition.push(s.substring(startIndex, endIndex+1));
                    backtrack(endIndex+1)
                    currentPartition.pop();
                }
            }
        }
        backtrack(0)
        return result;
    }
}
