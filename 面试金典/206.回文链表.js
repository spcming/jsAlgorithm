// 面试题 02.06. 回文链表
// 编写一个函数，检查输入的链表是否是回文的。

 

// 示例 1：

// 输入： 1->2
// 输出： false 
// 示例 2：

// 输入： 1->2->2->1
// 输出： true 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let p1 = head, p2 = head;
    if(!p2) return true
    while(p2.next){
        p2 = p2.next
        if(p2.next){
            p2 = p2.next
        }
        p1 = p1.next; // p1为后半段开头, 前半段小于等于后半段
    }
    let revert = null, endFlag = p1;
    if(!p1.next){
        revert = p1;
    }else{
        let p2 = p1.next;
        if(!p2.next){
            p2.next = p1;
            p1.next = null;
            revert = p2;
        }else{
            let p3 = p2.next;
            while(p3){
                p2.next = p1;
                p1 = p2;
                p2 = p3;
                p3 = p3.next;
            }
            p2.next = p1;
            revert = p2;
        }
    }
    let p = head;
    while(p !== endFlag){
        if(p.val === revert.val){
            p = p.next;
            revert = revert.next
        }else{
            return false
        }
    }
    return true

};