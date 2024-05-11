/** Linked List Cycle
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
*/

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const hasCycle = (head) => {
    let fastNode = head;
    let slow = head;
    while (fastNode && fastNode.next) {
        slow = slow ? slow.next : null;
        fastNode = fastNode.next.next;
        if (slow === fastNode) return true;
    }
    return false;
}
