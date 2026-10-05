// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let curr = head;
        while(curr){
            const copy = new Node(curr.val)
            copy.next = curr.next;
            curr.next = copy
            curr = copy.next
        }

        curr = head;
        while(curr){
            const copy = curr.next;
            if(curr.random){
                copy.random = curr.random.next;
            }
            curr = copy.next;
        }

        curr = head;
        const copiedHead = head.next;
        while(curr){
            const copy = curr.next;
            curr.next = copy.next
            if(copy.next){
                copy.next = copy.next.next
            }else{
                copy.next = null
            }
            curr = curr.next;
        }
        return copiedHead
    }
}
