class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
       const stack =[];
       let maxArea = 0;
       heights.push(0);
       for(let i=0; i< heights.length;i++){
        while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]){
            const topIndex = stack.pop();
            const height = heights[topIndex];
            const leftSmaller = stack.length > 0 ? stack[stack.length - 1]: -1;
            const rightSmaller = i;
            const width = rightSmaller - leftSmaller - 1;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
        }
        stack.push(i);
       }
       heights.pop();
       return maxArea;
    }
}
