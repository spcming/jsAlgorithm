// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807


function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    let l = new ListNode('head')
    let temp = l;
    let add=0;
    let sum=0;
    while(l1||l2){
        sum=(l1?l1.val:0)+(l2?l2.val:0)+add
        add=0;
        if(sum>=10){
            sum-=10;
            add=1;
        }
        temp.next=new ListNode(sum)
        temp=temp.next;
        l1&&(l1=l1.next)
        l2&&(l2=l2.next)
    }
    add&&(temp.next=new ListNode(1))
    
    return l.next
};
let l1=new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
let l2=new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
let res = addTwoNumbers(l1,l2)
console.log(res.val,res.next.val,res.next.next.val)