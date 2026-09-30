class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // left half is sorted
    if (nums[left] <= nums[mid]) {
      // target lies inside sorted left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      }
      // target is in other half
      else {
        left = mid + 1;
      }
    }

    // right half is sorted
    else {
      // target lies inside sorted right half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      }
      // target is in the other half
      else {
        right = mid - 1;
      }
    }
  }
  return -1;
    }
}
