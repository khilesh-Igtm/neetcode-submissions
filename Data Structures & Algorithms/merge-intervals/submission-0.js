class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=> a[0]-b[0])

        const res = [intervals[0]]

        for(let i=1;i<intervals.length;i++){
            const lastAddedInterval = res[res.length-1]
            const currentInterval = intervals[i]

            if(currentInterval[0] <= lastAddedInterval[1]){
                lastAddedInterval[1] = Math.max(lastAddedInterval[1],currentInterval[1])
            }else{
                res.push(currentInterval)
            }
        }
        return res
    }
}
