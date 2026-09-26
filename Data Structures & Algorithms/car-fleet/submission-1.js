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
        for(let i=0;i<n;i++){
            cars.push([position[i], speed[i]])
        }
        cars.sort((a,b)=> b[0] - a[0])
        let fleets =0;
        let fleetTime =0;
        for(const [pos, spd] of cars){
            const currentTime = (target - pos)/spd;
            if(currentTime > fleetTime){
                fleets++;
                fleetTime = currentTime;
            }
        }
        return fleets;
    }
}
