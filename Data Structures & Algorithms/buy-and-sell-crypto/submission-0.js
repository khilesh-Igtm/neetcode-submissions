class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity
        let ans = 0;
        for(let i =0;i<prices.length;i++){
            if(minPrice > prices[i]){
                minPrice = prices[i]
            }else{
                ans = Math.max(ans, prices[i] - minPrice)
            }
        }
        return ans;
    }
}
