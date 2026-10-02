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
     * @return {ListNode}
     */
    reverseList(head) {
         let prev = null;
  let curr = head;
  while(curr !== null){
    // save the next node before changing the link
    let next = curr.next;

    // reverse the current node's pointer
    curr.next = prev;

    // move prev forward
    prev = curr;

    // move curr forward
    curr = next;
  }

  //prev is new head
  return prev;
    }
}
