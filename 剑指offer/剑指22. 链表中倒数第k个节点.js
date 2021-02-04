/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let prev=head,
        end=head;
    for(let i=0;i<k-1;i++){
        end=end.next;
    }
    while(end.next=null){
        end = end.next;
        prev = prev.next;
    }
    return prev
};  
