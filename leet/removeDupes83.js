/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head.next) {
        return head;
    }
    var curNode = head;
    var nextNode = curNode.next;
    // var previousVal;
    while (nextNode) {
        nextNode = curNode.next;
        if ( nextNode && curNode.val === nextNode.val ) {
            curNode.next = nextNode.next;
            // nextNode = curNode.next;
        }
        curNode = curNode.next;
    }
    return head;
};