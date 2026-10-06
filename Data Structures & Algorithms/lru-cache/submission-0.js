class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache =[];
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        for(let i=0; i<this.cache.length;i++){
            if(this.cache[i].key === key){
                const value = this.cache[i].value;
                this.cache.splice(i,1)
                this.cache.push({key, value})
                return value;
            }
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        for(let i=0;i< this.cache.length; i++){
            if(this.cache[i].key === key){
                this.cache.splice(i,1)
                break;
            }
        }

        this.cache.push({key, value})
        if(this.cache.length > this.capacity){
            this.cache.shift()
        }
    }
}
