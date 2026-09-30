class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[])
        }

        const values = this.keyStore.get(key);
        values.push({
            value: value,
            timestamp: timestamp
        })
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)){
            return "";
        }
        const values = this.keyStore.get(key);
        let answer ="";
        let latestTimestamp = -1;
        for(const item of values){
            if(item.timestamp <= timestamp){
                if(item.timestamp > latestTimestamp){
                    latestTimestamp = item.timestamp
                    answer = item.value
                }
            }
        }
        return answer;
    }
}
