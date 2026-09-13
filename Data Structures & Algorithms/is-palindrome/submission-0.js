class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let cleaned = "";

  // remove non-alphanumeric characters and convert to lowercase
  for (let char of s) {
    if (/[a-zA-Z0-9]/.test(char)) {
      cleaned += char.toLowerCase();
    }
  }

  // reverse the cleaned string
  let reversed = "";
  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return cleaned === reversed;
    }
}
