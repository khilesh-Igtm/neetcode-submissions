class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = Infinity;
        for(let i=0;i<nums.length;i++){
            if(nums[i]< res){
                res = nums[i]
            }
        }
        return res;
    }
}
