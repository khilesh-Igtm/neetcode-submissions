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
    isBalanced(root) {
        if(!root) return true;

        let leftHeight = this.getHeight(root.left)
        let rightHeight = this.getHeight(root.right)

        if(Math.abs(leftHeight - rightHeight) > 1){
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)

    }
    getHeight(node){
        if(!node) return 0;
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    }
}
