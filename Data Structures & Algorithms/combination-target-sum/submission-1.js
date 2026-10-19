class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
    // Stores all valid combinations
    const result = [];

    // Stores the combination currently being explored
    const path = [];

    // Sort numbers to enable early stopping
    nums.sort((a, b) => a - b);

    // start: index from which we can choose numbers
    // remaining: sum still needed to reach the target
    function backtrack(start, remaining) {

        // Base case: exact target achieved
        if (remaining === 0) {
            // Save a COPY because path will change during backtracking
            result.push([...path]);
            return;
        }

        // Explore candidates from start onward
        for (let i = start; i < nums.length; i++) {
            const num = nums[i];

            // Since nums is sorted, later numbers will be
            // even larger, so none can fit the remaining target
            if (num > remaining) {
                break;
            }

            // Step 1: Choose the current number
            path.push(num);

            // Step 2: Explore recursively
            // Use i, not i + 1, because reuse is allowed
            backtrack(i, remaining - num);

            // Step 3: Undo the choice
            // Restore path before trying the next candidate
            path.pop();
        }
    }

    // Begin from index 0 with the full target remaining
    backtrack(0, target);

    // Return all unique combinations
    return result;
    }
}
