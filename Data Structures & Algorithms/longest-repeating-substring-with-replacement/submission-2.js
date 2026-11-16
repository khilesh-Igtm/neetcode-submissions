class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let freq = new Map();
  let left =0;
  let maxFreq = 0;
  let maxLength =0;

  for(let right =0;right < s.length; right++){
    let char = s[right];
    freq.set(char, (freq.get(char) || 0 )+1);

    // har suvstring me konsa character hai jiski freq max hai and wahi maxfreq use karo
    maxFreq = Math.max(maxFreq, freq.get(char))

    let windowLength = right - left +1;
    let replacements = windowLength - maxFreq;
    if(replacements > k){
      let leftChar = s[left]
      // ye bhi zaruri hai bcz intially left =0, so s[0] is A hence leftChar is A , then here freq.get(A) i.e freq of A in that substring which was 3 so 3-1 =2 means we removed one occurence and updated left++. so means shrinking window from left
      freq.set(leftChar, freq.get(leftChar)-1)
      left++;
    }
    maxLength = Math.max(maxLength, right-left+1)
  }
  return maxLength;
    }
}
