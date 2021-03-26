/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let prev = head, tail = head;
    for(let i = 0; i < n; i++){
        tail = tail.next;
    }
    if(tail == null){
        return head.next
    }
    while(tail.next != null){
        tail = tail.next
        prev = prev.next
    }
    prev.next = prev.next.next;
    return head
};