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
 var mergeTwoLists = function(l1, l2) {
    let cur = l2
    let prev = null
    if(!l1) return l2
    if(!l2) return l1
    while(l1.val > cur.val){
        prev = cur
        if(!cur.next) {
            cur.next = new ListNode(l1.val, null)
            if(l1.next == null) return l2
            return mergeTwoLists(l1.next, l2)
        }
        else cur = cur.next
    }
    if(prev == null){
        let newNode = new ListNode(l1.val, l2)
        if(l1.next == null) return newNode
        return mergeTwoLists(l1.next, newNode)
    }else{
        let newNode = new ListNode(l1.val, prev.next)
        prev.next = newNode
        if(l1.next == null) return l2
        return mergeTwoLists(l1.next, l2)
    }

};