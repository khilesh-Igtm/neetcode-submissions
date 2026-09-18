class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
       // edge case: if s1 is larger than s2, it can't be a substring
  if (s1.length > s2.length) return false;

  // arrays of size 26 to store frequencies of lowercase letters
  const s1Count = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0)

  // helper function to compare two arrays of size 26
  const isMatch = (arr1, arr2) => {
    for (let i = 0; i < 26; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  // 1. Setup the first window
  // calculate frequencies for s1 and the first s1.length characters of s2
  for(let i=0; i< s1.length; i++){
    // 'a'.charCodeAt(0) is 97. We subtract 97 to map 'a'-'z' to index 0-25.
    s1Count[s1.charCodeAt(i) - 97]++;
    windowCount[s2.charCodeAt(i) - 97]++;
  }

  // 2. Slide the window over the rest of s2
  for(let i = s1.length; i< s2.length; i++){
    // check if the previous window was a match
    if(isMatch(s1Count, windowCount)) return true;

    // the new character entering our sliding window
    let rightChar = s2.charCodeAt(i) - 97;
    windowCount[rightChar]++;

    // the old character leaving our sliding window
    let leftChar = s2.charCodeAt(i - s1.length) - 97;
    windowCount[leftChar]--;
  }

  // don't forget to check the very last window after the loop ends
  return isMatch(s1Count, windowCount)
}
}

