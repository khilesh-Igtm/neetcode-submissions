class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => a-b);

        const result = []
        function backtrack(i, currentSubset){
            if(i === nums.length){
                result.push([...currentSubset]);
                return;
            }

            currentSubset.push(nums[i])
            backtrack(i+1,currentSubset);
            currentSubset.pop();

            while(i+1 < nums.length && nums[i] === nums[i+1]){
                i += 1;
            }
            backtrack(i+1, currentSubset);
        }
        backtrack(0,[])
        return result;
    }
}
