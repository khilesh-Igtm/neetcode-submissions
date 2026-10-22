class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result =[]
        const currentPartition =[]

        const isPalindrome = (str, left, right)=>{
            while(left < right){
                if(str[left] !== str[right]){
                    return false;
                }
                left++;
                right--;
            }
            return true;
        }

        const backtrack =(startIndex)=>{
            if(startIndex >= s.length){
                result.push([...currentPartition])
                return;
            }

            for(let endIndex = startIndex; endIndex < s.length; endIndex++){
                if(isPalindrome(s,startIndex, endIndex)){
                    currentPartition.push(s.substring(startIndex, endIndex+1));
                    backtrack(endIndex+1);
                    currentPartition.pop();
                }
            }

        }
        backtrack(0);
        return result;
    }
}
