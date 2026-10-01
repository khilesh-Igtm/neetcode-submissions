class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let m = nums1.length;
        let n = nums2.length;
        let newarr = [];
        for(let i =0;i<m;i++){
            newarr.push(nums1[i])
        }
        for(let j =0;j<n;j++){
            newarr.push(nums2[j])
        }
        newarr.sort((a,b)=> a-b);
        if(newarr.length % 2 === 0){
            let a = Math.floor(newarr.length/2)
            let b = Math.floor(newarr.length/2 )- 1
            return (newarr[a]+newarr[b])/2;
        }else{
            return newarr[Math.floor(newarr.length/2)]
        }
    }
}
