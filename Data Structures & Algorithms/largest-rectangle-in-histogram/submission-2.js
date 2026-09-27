class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
    let maxArea = 0;

    // Go one step beyond the actual array.
    // At i === heights.length, treat height as 0.
    for (let i = 0; i <= heights.length; i++) {

        // Virtual 0 at the end
        const currentHeight = i === heights.length
            ? 0
            : heights[i];

        // Current height is smaller than stack top,
        // so the stack top has found its right boundary.
        while (
            stack.length > 0 &&
            currentHeight < heights[stack[stack.length - 1]]
        ) {
            const topIndex = stack.pop();

            const height = heights[topIndex];

            // After popping, stack top is the
            // previous smaller element.
            const leftSmaller =
                stack.length > 0
                    ? stack[stack.length - 1]
                    : -1;

            // Current index is the next smaller element.
            const rightSmaller = i;

            const width = rightSmaller - leftSmaller - 1;

            const area = height * width;

            maxArea = Math.max(maxArea, area);
        }

        // Don't push the virtual 0
        if (i < heights.length) {
            stack.push(i);
        }
    }

    return maxArea;
    }
}
