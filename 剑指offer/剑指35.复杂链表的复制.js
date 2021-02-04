function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};

var copyRandomList = function(head) {
    let map = new Map()
    function fnGetMap(head){
        if(head.next == null){
            map.set(head,new Node(head.val,null))
            return map.get(head)
        }else{
            map.set(head,new Node(head.val,fnGetMap(head.next)))
            return map.get(head)
        }
    }
    fnGetMap(head)
    let res = map.get(head),
        temp = res
    while(temp){
        temp.random = map.get(head.random)
        head = head.next
        temp = temp.next
    }
    console.log(res)
};

let A = new Node(7)
A.next = new Node(13)
A.next.next = new Node(11)
A.next.random = new Node(A)
A.next.next.next = new Node(10)
A.next.next.random = new Node(A.next.next.next.next)
A.next.next.next.next = new Node(1)
A.next.next.next.random = new Node(A.next.next)

copyRandomList(A)