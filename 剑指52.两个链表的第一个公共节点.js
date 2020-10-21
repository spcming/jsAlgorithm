/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA,pB = headB,ifChange = false
    if(!headA || !headB) return null
    while(pA!=pB){
        if(pA.next!=null){
            pA = pA.next
        }else{
            if(ifChange) return null
            ifChange = true
            pA = headB
        }
        if(pB.next!=null){
            pB = pB.next
        }else{
            pB = headA
        }
    }
    return pA
};