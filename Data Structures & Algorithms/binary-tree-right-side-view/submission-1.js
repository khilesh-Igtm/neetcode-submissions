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
     * @return {number[]}
     */
    rightSideView(root) {
        const result =[];
        function dfs(node, level){
            if(node === null) return;
            if(level === result.length){
                result.push(node.val)
            }
            dfs(node.right, level+1)
            dfs(node.left, level+1)
        }
        dfs(root,0)
        return result;
    }
}
