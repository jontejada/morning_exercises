/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var node = head;
    var prev;
    while (node) {
        //head matching
        if (node === head && node.val === val) {
            // node = head.next;
            head = head.next;
            // continue;
        
        //interior matching
        } else if (node.val === val) {
            prev.next = node.next;
            node = node.next;
            continue;
        } 
        //end matching (or same as interior)
        
        if (node.val === val) {
        }
        prev = node;
        node = node.next;
    }
    return head;
};