class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result =[]
        const path =[]
       const used = new Array(nums.length).fill(false)
       function backtrack(){
        if(path.length === nums.length){
            result.push([...path])
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]){
                continue;
            }
            path.push(nums[i])
            used[i] = true;
            backtrack();
            used[i] = false;
            path.pop();
        }
       }
       backtrack();
       return result;
    }
}
