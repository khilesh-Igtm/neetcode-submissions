class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => a-b);
        const uniqueSubsets = new Set();
        const result = []
        function backtrack(i, currentSubset){
            if(i === nums.length){
                const subsetStr = currentSubset.join(',')
                if(!uniqueSubsets.has(subsetStr)){
                    uniqueSubsets.add(subsetStr);
                    result.push([...currentSubset]);
                }
                return;
            }

            currentSubset.push(nums[i]);
            backtrack(i+1,currentSubset);
            currentSubset.pop();
            backtrack(i+1, currentSubset);
        }
        backtrack(0,[]);
        return result;
    }
}
