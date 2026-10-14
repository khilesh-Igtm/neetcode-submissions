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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const pathP = [];
        const pathQ = [];

        function findPath(node, target, path){
            if(node === null) return false;
            path.push(node)
            if(node === target) return true;
            if(findPath(node.left,target,path) || findPath(node.right,target, path)){
                return true;
            }
            path.pop();
            return false;
        }
        findPath(root,p, pathP)
        findPath(root,q,pathQ)

        let lca = null;
        for(let i=0; i< Math.min(pathP.length, pathQ.length);i++){
            if(pathP[i] === pathQ[i]){
                lca = pathP[i];
            }else{
                break;
            }
        }
        return lca
    }
}
