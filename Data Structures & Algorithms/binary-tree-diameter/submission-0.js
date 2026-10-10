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
    diameterOfBinaryTree(root) {
      if(root === null){
    return 0;
  }

  let leftHeight = height(root.left)
  let rightHeight = height(root.right)

  let currentDiameter = leftHeight + rightHeight;

  let leftDiameter = this.diameterOfBinaryTree(root.left)
  let rightDiameter = this.diameterOfBinaryTree(root.right)

  return Math.max(currentDiameter, Math.max(leftDiameter, rightDiameter))

  function height(node){
    if(node === null) return 0;

    return 1+ Math.max(height(node.left), height(node.right))
  }
    }
}
