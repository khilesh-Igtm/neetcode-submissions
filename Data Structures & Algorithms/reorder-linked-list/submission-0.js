/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
          if(!head || !head.next) return;

  // store all nodes
  const nodes = []
  let curr = head;

  while(curr){
    nodes.push(curr);
    curr = curr.next;
  }

  let left = 0;
  let right = nodes.length-1;

  while(left < right){
    // first node
    nodes[left].next = nodes[right]
    left++;

    // last node
    if(left === right) break;

    // and yaha pe hum jo furst node ke baad last node aaya usko hum updated left node se jod rahe hai like from [1,2,3,4,5,6] , here are pointng [1,6,2 ....] , 6 with 2
    nodes[right].next = nodes[left];
    right--;
  }
  nodes[left].next = null;
    }
}
