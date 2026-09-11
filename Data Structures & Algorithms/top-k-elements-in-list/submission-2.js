class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // step1: Count frequency of each number
  const freq = new Map();

  for(const num of nums){
    freq.set(num, (freq.get(num) || 0)+1);
  }

  // step2: Create buckets
  // Index = frequency
  // buckets[3] will contain those numbers whoes frequency is 3
  const buckets = Array.from({length: nums.length + 1}, ()=> [])

  // step3: Put each number into its frequency bucket
  for(const [num, count] of freq){
    buckets[count].push(num);
  }

  // step4: traverse from highest frequency to lowest
  const result = [];
  for(let i = buckets.length - 1; i>=0; i--){
    // there can be multiple numbers
    // having the same frequency
    for(const num of buckets[i]){
      result.push(num);

      // we only need K elements
      if(result.length === k){
        return result;
      }
    }
  }
    }
}
