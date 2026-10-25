class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
const result = new Array(nums.length);

  // store prefix products , result[i] = product of all elements to the left of i
  let prefix = 1;
  for(let i =0;i<nums.length;i++){
    result[i] = prefix;
    prefix *= nums[i];
  }

  // multiply with suffix products , suffix = product of all elements to the right of i
  let suffix = 1;
  for(let i = nums.length-1; i>=0;i--){
    result[i] *= suffix;
    suffix *= nums[i]
  }
  return result;

    }
}
