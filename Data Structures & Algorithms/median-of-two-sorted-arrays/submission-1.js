class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
       
  // always binary search on the smaller array
  if(nums1.length > nums2.length){
    [nums1, nums2] = [nums2, nums1]
  }

  let m = nums1.length;
  let n = nums2.length;

  let low = 0;
  let high =m;

  // number of elements required on left side
  let half = Math.floor((m+n+1)/2);
  while(low <= high){
    // partition nums1
    let i = Math.floor((low+high)/2);

    // partition nums2 is automatically determined
    let j = half - i;

    // boundary values
    let nums1Left = i === 0 ? -Infinity : nums1[i-1];
    let nums1Right = i === m ? Infinity : nums1[i];

    let nums2Left = j === 0 ? -Infinity : nums2[j-1]
    let nums2Right = j === n ? Infinity : nums2[j]

    // found the correct partition
    if(nums1Left <= nums2Right && nums2Left <= nums1Right){
      // odd total length
      if((m+n) %2 === 1){
        return Math.max(nums1Left, nums2Left)
      }

      // even total length
      let leftMax = Math.max(nums1Left, nums2Left)
      let rightMin= Math.min(nums1Right, nums2Right)

      return (leftMax + rightMin)/2;
    }
    // nums1 partition is too far right
    if(nums1Left > nums2Right){
      high = i-1;
    }

    // nums1 partition is too far left
    else{
      low = i+1;
    }
  }
    }
}
