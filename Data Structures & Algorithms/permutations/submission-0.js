class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result =[]
        const path =[]
        function backtrack(){
            if(path.length === nums.length){
                if(new Set(path).size === nums.length){
                    result.push([...path])
                }
                return;
            }
            for(const num of nums){
                path.push(num)
                backtrack();
                path.pop()
            }
        }
        backtrack();
        return result;
    }
}
