class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let str of strs){
            let newStr = str.split('').sort().join();
            if(!map.has(newStr)){
                map.set(newStr,[])
            }
                map.get(newStr).push(str)
            
        }
        return Array.from(map.values())
    }
}
