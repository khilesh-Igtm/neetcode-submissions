class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charIndexMap = new Map();
        let left =0;
        let maxLength = 0;

        for(let right =0;right<s.length;right++){
            let currentChar = s[right];

            if(charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left){
                left = charIndexMap.get(currentChar) +1;
            }
            charIndexMap.set(currentChar, right);
            maxLength = Math.max(maxLength, right-left+1);
        }
        return maxLength;
    }
}
