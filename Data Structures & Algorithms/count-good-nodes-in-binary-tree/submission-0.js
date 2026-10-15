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
    goodNodes(root) {
       // count the number of good nodes
  let count =0;
  function dfs(node, maxSoFar){
    // stop if there is no node
    if(node === null) return;
    // if this node is atleast as large as every previous value on the path, it is a good node
    if(node.val >= maxSoFar){
      count++;
    }

    // update the maximum for the path to the children
    const newMax = Math.max(maxSoFar, node.val)

    // explore the left subtree with the updated maxium
    dfs(node.left, newMax)
    dfs(node.right, newMax)
  }

  // Start with negative infinity so the root is always good.
  dfs(root, -Infinity)
  return count
    }
}
