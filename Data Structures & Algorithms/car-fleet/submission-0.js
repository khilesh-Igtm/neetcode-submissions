class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const cars = [];
        for(let i=0; i<n;i++){
            cars.push({
                position: position[i],
                speed: speed[i],
                time: (target - position[i]) / speed[i]
            })
        }

        cars.sort((a,b) => b.position - a.position)
        const fleets = [];
        for(let i =0;i<n;i++){
            const currentTime = cars[i].time;
            let joinedFleet = false;
            for(let j=0; j<fleets.length;j++){
                if(currentTime <= fleets[j]){
                    joinedFleet = true;
                    break;
                }
            }

            if(!joinedFleet){
                fleets.push(currentTime)
            }
        }
        return fleets.length;
    }
}
