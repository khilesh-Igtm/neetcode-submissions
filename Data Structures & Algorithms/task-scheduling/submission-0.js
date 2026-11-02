class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Array(26).fill(0)
        for(let i=0;i<tasks.length;i++){
            freq[tasks[i].charCodeAt(0) - 65]++;
        }
        const nextAvailable = new Array(26).fill(0)
        let currentTime =0;
        let tasksRemaining = tasks.length;

        while(tasksRemaining > 0){
            currentTime++;
            let bestTaskIdx = -1;
            let maxFreq = 0;

            for(let i =0;i<26;i++){
                if(freq[i] > 0 && nextAvailable[i]<=currentTime){
                    if(freq[i]> maxFreq){
                        maxFreq = freq[i]
                        bestTaskIdx =i;
                    }

                }
            }
            if(bestTaskIdx !== -1){
                freq[bestTaskIdx]--;
                nextAvailable[bestTaskIdx] = currentTime + n+ 1;
                tasksRemaining--;
            }
        }
        return currentTime;
    }
}
