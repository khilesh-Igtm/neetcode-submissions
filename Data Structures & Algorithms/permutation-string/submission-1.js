class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
      if (s1.length > s2.length) return false;

  // frequency of characters in s1
  const s1Freq = new Map();
  for (const char of s1) {
    s1Freq.set(char, (s1Freq.get(char) || 0) + 1);
  }

  // check every substring of length s1.length
  for (let i = 0; i <= s2.length - s1.length; i++) {
    const windowFreq = new Map();

    // count characters in current window
    for (let j = i; j < i + s1.length; j++) {
      const char = s2[j];
      windowFreq.set(char, (windowFreq.get(char) || 0) + 1)
    }

    // comapre frequencies
    if (this.areMapEqual(s1Freq, windowFreq)) {
      return true;
    }
  }
  return false;
    }
     areMapEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (const [char, count] of map1) {
    if (map2.get(char) !== count) {
      return false;
    }
  }
  return true;
}
}

