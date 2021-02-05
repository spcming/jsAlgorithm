/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p = l1,
        q = l2
    let list = new ListNode(),
        head = list
    let j=0,
        cur=0;
    while(p!=null || q!=null){
        let qVal = q?q.val:0,
            pVal = p?p.val:0
        cur = (pVal + qVal + j) % 10
        j = Math.floor((pVal + qVal + j) / 10)
        list.val = cur
        p = p?p.next:null
        q = q?q.next:null
        if(q!=null || p!=null){
            list.next = new ListNode()
            list = list.next
        }
    }
    if(j!=0){
        list.next = new ListNode(j)
    }
    
    return head
};