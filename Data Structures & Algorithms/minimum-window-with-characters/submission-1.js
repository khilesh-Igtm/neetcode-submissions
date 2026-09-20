class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
  if (t.length === 0 || t.length > s.length) {
    return "";
  }

  // store required frequency of each character
  const required = new Map();

  for (const char of t) {
    required.set(char, (required.get(char) || 0) + 1);
  }

  // number of unique characters we need to satisfy
  const need = required.size;


  // number of unique characters currently satisfied
  let have = 0;

  // frequency of characters inside current window
  const window = new Map();

  let left = 0;

  let minLength = Infinity
  let result = ""

  // expand window using right
  for (let right = 0; right < s.length; right++) {
    const char = s[right]

    // add character to window
    window.set(char, (window.get(char) || 0) + 1);

    // if this character just reached its required frequency 
    if (required.has(char) && window.get(char) === required.get(char)) {
      have++;
    }

    // window is valid
    while (have === need) {
      const currentLength = right - left + 1;

      // update minimum answer
      if (currentLength < minLength) {
        minLength = currentLength;
        result = s.substring(left, right + 1);
      }

      // remove leftmost character
      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar) - 1)

      // if removing it makes the window invalid
      if (required.has(leftChar) && window.get(leftChar) < required.get(leftChar)) {
        have--;
      }
      left++;
    }
  }
  return result;

    }
}
