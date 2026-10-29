class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1){
            stones.sort((a,b)=>a-b)
            let y = stones.pop()
            let x = stones.pop()
            if(y > x){
                stones.push(y-x)
            }
        }
        return stones.length === 1 ? stones[0] : 0;
    }
}
