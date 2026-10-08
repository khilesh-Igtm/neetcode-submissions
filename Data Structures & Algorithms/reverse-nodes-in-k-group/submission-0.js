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
            let curr = head;
    let prevGroupTail = null;
    let newHead = null;

    while (curr !== null) {
        let group = [];

        // Collect k nodes
        let temp = curr;

        while (temp !== null && group.length < k) {
            group.push(temp);
            temp = temp.next;
        }

        // Fewer than k nodes → leave them unchanged
        if (group.length < k) {
            if (prevGroupTail !== null) {
                prevGroupTail.next = curr;
            }

            break;
        }

        // Reverse the group using array
        group.reverse();

        // Connect nodes in reversed order
        for (let i = 0; i < group.length - 1; i++) {
            group[i].next = group[i + 1];
        }

        // Last node of reversed group points to next group
        group[group.length - 1].next = temp;

        // First reversed group becomes new head
        if (newHead === null) {
            newHead = group[0];
        }

        // Previous group's tail connects to current group's head
        if (prevGroupTail !== null) {
            prevGroupTail.next = group[0];
        }

        // Original first node becomes tail after reversal
        prevGroupTail = group[group.length - 1];

        // Move to next group
        curr = temp;
    }

    return newHead;
    }
}
