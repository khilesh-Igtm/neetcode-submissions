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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
           let dummy = new ListNode(0, head)
  let groupPrev = dummy;
  while(true){
    let kth = groupPrev;
    for(let i=0;i<k;i++){
      kth = kth.next;
      if(kth === null){
        return dummy.next;
      }
    }
    let groupNext = kth.next;
    let prev = groupNext;
    let curr = groupPrev.next;
    while(curr !== groupNext){
      let nextNode = curr.next;
      curr.next = prev
      prev = curr
      curr = nextNode
    }

    let oldGroupStart = groupPrev.next
    groupPrev.next = kth
    groupPrev = oldGroupStart;}
    }
}
