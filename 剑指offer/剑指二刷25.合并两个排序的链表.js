/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l1Cur = l1,
        l2Cur = l2,
        res = new ListNode(null),
        cur = res
    if(l1 == null){
        return l2
    }
    if(l2 == null){
        return l1
    }
    while(l1Cur!=null && l2Cur!=null){
        if(l1Cur.val <= l2Cur.val){
            cur.val = l1Cur.val
            l1Cur = l1Cur.next
        }else{
            cur.val = l2Cur.val
            l2Cur = l2Cur.next
        }
        cur.next = new ListNode()
        cur = cur.next
    }
    if(l1Cur == null && l2Cur != null){
        cur.val = l2Cur.val
        cur.next = l2Cur.next
    }
    if(l2Cur == null && l1Cur != null){
        cur.val = l1Cur.val
        cur.next = l1Cur.next
    }
    return res
};