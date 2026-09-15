class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let leftMax = new Array(n)
        let rightMax = new Array(n)

        leftMax[0] = height[0]
        for(let i =1;i<n;i++){
            leftMax[i] = Math.max(leftMax[i-1], height[i]);
        }

        rightMax[n-1] = height[n-1]
        for(let i =n-2;i>=0;i--){
            rightMax[i] = Math.max(rightMax[i+1], height[i])
        }

        let water =0;
        for(let i=0;i<n;i++){
            let level = Math.min(leftMax[i], rightMax[i])
            water += Math.max(0, level - height[i])
        }
        return water
    }
}
