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
        let length =0;
        let curr = head;
        while(curr){
            length++;
            curr = curr.next;
        }

        // if removing the head
        if(n === length){
            return head.next;
        }

        curr = head;
        for(let i=0;i<length-n-1; i++){
            curr = curr.next;
        }

        curr.next = curr.next.next
        return head;
    }
}
