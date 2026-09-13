class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        nums.sort((a,b)=> a-b);

        let maxLength =1;
        let currentStreak = 1;
        for(let i =1;i<nums.length;i++){
            if(nums[i] === nums[i-1]){
                continue;
            }

            if(nums[i] === nums[i-1]+1){
                currentStreak++;
            }else{
                maxLength = Math.max(maxLength, currentStreak);
                currentStreak =1;
            }
        }
        return Math.max(maxLength, currentStreak)
    }
}
