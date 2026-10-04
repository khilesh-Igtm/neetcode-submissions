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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // dummy node handles the case where we need to remove the head
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  // move fast n+1 steps ahead , this creates the required gap
  for(let i =0;i<=n ; i++){
    fast = fast.next;
  }

  // move both pointers until fast reaches null
  while(fast !== null){
    slow = slow.next;
    fast = fast.next;
  }

  // slow is now just before the node that needs to be removed
  slow.next = slow.next.next;
  return dummy.next;
    }
}
