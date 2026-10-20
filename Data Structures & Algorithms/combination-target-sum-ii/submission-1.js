class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        const path = [];

        candidates.sort((a,b)=> a-b)

        function backtrack(start, remaining){
           if(remaining === 0){
            result.push([...path])
            return;
           }

           for(let i = start; i< candidates.length;i++){
            const num = candidates[i];
            if(i> start && num === candidates[i-1]){
                continue;
            }
            if(num > remaining){
                break;
            }
            path.push(num)
            backtrack(i+1,remaining-num)
            path.pop()
           }
        }
        backtrack(0,target);
        return result;
    }
}
