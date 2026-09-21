class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
       const result = [];
    const deque = [];

    let left = 0;
    let head = 0;

    for (let right = 0; right < nums.length; right++) {

        // 1. Remove indexes outside the window
        while (head < deque.length && deque[head] < left) {
            head++;
        }

        // 2. Remove smaller/equal values from back
        while (
            deque.length > head &&
            nums[deque[deque.length - 1]] <= nums[right]
        ) {
            deque.pop();
        }

        // 3. Add current index
        deque.push(right);

        // 4. If window size is k
        if (right - left + 1 === k) {
            result.push(nums[deque[head]]);
            left++;
        }
    }

    return result;
    }
}
