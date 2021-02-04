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
    if(head == null || head.next == null){
        return head
    }
    let pre = head,
        cur = head.next
    
    head.next = null
    while(cur != null){
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};