/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        function dfs(node, minBound, maxBound){
            if(node === null) return true;
            if(node.val <= minBound || node.val >= maxBound){
                return false;
            }
            return dfs(node.left,minBound, node.val) && dfs(node.right, node.val, maxBound)
        }

        return dfs(root, -Infinity, Infinity)
    }
}
