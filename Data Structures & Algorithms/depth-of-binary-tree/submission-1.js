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
    maxDepth(root) {
        if (root === null) {
            return 0;
        }
        
        let queue = [root];
        let depth = 0;
        
        while (queue.length > 0) {
            // Current level me kitne nodes hain
            let levelSize = queue.length; 
            
            // Current level ke saare nodes ko queue se nikal kar unke bachhon ko daalo
            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift(); 
                
                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }
            
            // Ek poora level process ho gaya, toh depth badha do
            depth++;
        }
        
        return depth;
    }
}
