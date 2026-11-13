class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i =0;
        let j = heights.length-1;
        let ans =0;
        while(i< j){
            let minHeight = Math.min(heights[i], heights[j])
            let width = j - i;
            let area = minHeight * width;
            ans = Math.max(ans, area);
            if(heights[i]< heights[j]){
                i++;
            }else{
                j--;
            }
        }
        return ans;
    }
}
