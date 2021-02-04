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
    let cur = head.next,pre = head;
    if(head.val == val){
        head = head.next;
        return head
    }
    while(cur.val!=val){
        cur = cur.next
        pre = pre.next
    }
    pre.next = cur.next
    return head
};