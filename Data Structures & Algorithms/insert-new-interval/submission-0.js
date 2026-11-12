class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        intervals.push(newInterval)
        intervals.sort((a,b)=> a[0]-b[0])
        let res =[]

        for(let i=0;i<intervals.length;i++){
            let current = intervals[i]
            if(res.length === 0 || res[res.length-1][1] < current[0]){
               res.push(current) 
            }else{
                res[res.length-1][1] = Math.max(res[res.length-1][1], current[1]);
            }
        }
        return res;
    }
}
