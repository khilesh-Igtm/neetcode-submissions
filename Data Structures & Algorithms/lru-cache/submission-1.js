class Node{
    constructor(key, value){
        this.key = key
        this.value = value
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        this.head = new Node(-1, -1)
        this.tail = new Node(-1,-1)

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node){
        const prevNode = node.prev
        const nextNode = node.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
    }

    insert(node){
        const prevNode = this.tail.prev
        prevNode.next = node
        node.prev = prevNode
        node.next = this.tail
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)){
            return -1;
        }
        const node = this.cache.get(key)
        this.remove(node)
        this.insert(node)
        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.remove(this.cache.get(key))
        }

        const newNode = new Node(key,value)
        this.cache.set(key, newNode)
        this.insert(newNode)

        if(this.cache.size > this.capacity){
            const lruNode = this.head.next;
            this.remove(lruNode)
            this.cache.delete(lruNode.key)
        }
    }
}
