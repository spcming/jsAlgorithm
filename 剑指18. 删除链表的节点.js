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
var deleteNode = function(head, val) {
    if(head.val === val){
        head=head.next;
        return head
    }
    let p=head;
    while(p.next.val !== val && p.next!=null){
        p=p.next;
    }
    p.next = p.next.next;
    return head
};