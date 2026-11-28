class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let str of strs){
            let freq = new Array(26).fill(0)
           for(let char of str){
            freq[char.charCodeAt(0)-97]++;
           }
           let key = freq.join('#')
           if(!map.has(key)){
            map.set(key,[])
           }
           map.get(key).push(str)
            
        }
        return Array.from(map.values())
    }
}
