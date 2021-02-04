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
var reverseList = function(head) {
    let cur=null,
        next=head;
    while(next!=null){
        let temp = next.next
        next.next = cur
        cur = next
        next = temp
    }
    return cur
};