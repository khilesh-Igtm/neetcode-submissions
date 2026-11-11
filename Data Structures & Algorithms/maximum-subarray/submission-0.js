class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = -Infinity
        let currentMax = -Infinity
        for(let i =0;i<nums.length;i++){
            currentMax = Math.max(nums[i]+currentMax,nums[i])
            res = Math.max(currentMax,res) 
        }
        return res
    }
}
