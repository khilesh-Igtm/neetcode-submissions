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
     * @return {number}
     */
    maxPathSum(root) {
        let res = [root.val];
        const dfs = (node)=>{
            if(node === null){
                return 0;
            }
            let leftMax = Math.max(0,dfs(node.left));
            let rightMax = Math.max(0, dfs(node.right))

            res[0] = Math.max(res[0], node.val+ leftMax+ rightMax)
            return node.val + Math.max(leftMax, rightMax)
        }
        dfs(root)
        return res[0]
    }
}
