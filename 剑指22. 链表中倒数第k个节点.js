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
    let map = new Map;
    let index = 1;
    while(head!=null){
        map.set(index,head)
        index++
        head = head.next
    }
    return map.get(index-k+1)
};  