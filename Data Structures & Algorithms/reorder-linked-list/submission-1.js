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

  // step1 : find middle
  let slow = head;
  let fast = head.next;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }

  // second half starts after slow
  let second = slow.next;

  // cut the list into two halves
  slow.next = null;

  // reverse the second half
  let prev = null;
  let curr = second;

  while(curr){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  second = prev

  // now merge both halves
  let first = head;
  while(second){
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second= temp2
  }
    }
}
