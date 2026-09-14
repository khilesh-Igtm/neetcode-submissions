class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
 nums.sort((a, b) => a - b)
  let ans = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    // if the current number is positive we can't sum to 0 anymore since the array is sorted
    if (nums[i] > 0) break;

    // skip duplicate values for the first number to prevent duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        ans.push([nums[i], nums[l], nums[r]])
        l++;
        r--;

        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }
  return ans;
    }
}
