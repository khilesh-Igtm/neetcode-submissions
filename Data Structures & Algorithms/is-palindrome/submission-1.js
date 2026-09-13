class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
   let i = 0;
  let j = s.length - 1;

  while (i < j) {

    // Skip non-alphanumeric characters
    while (i < j && !/[a-zA-Z0-9]/.test(s[i])) {
      i++;
    }

    // Skip non-alphanumeric characters
    while (i < j && !/[a-zA-Z0-9]/.test(s[j])) {
      j--;
    }

    // Compare characters ignoring case
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
    }
}
