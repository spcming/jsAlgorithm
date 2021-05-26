/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 
 var mergeKLists = function(lists) {
  // 检查参数是否合法
  for (let k = 0; k < lists.length; k++) {
    if(!lists[k]) {
      lists.splice(k, 1);
      k--;
    }
  }  
  if (!lists.length) return null
  // 初始化堆
  let heap = []
  for (let k in lists) {
    heap.push(lists[k])
  }
  // 创建一个小顶堆
  let n = heap.length - 1
  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    heapify(heap, n, i)
  }
  let res = new ListNode()
  let p = res
  while (heap.length) {
    p.next = new ListNode(heap[0].val, null);
    p = p.next;
    let temp = heap[0].next
    heap[0] = heap[0].next;
    swap(heap, n, 0);
    heap.splice(n, 1)
    n--;
    heapify(heap, n, 0);
    if(temp){
      heap.push(temp)
      n++
      let cur = n, parent = Math.floor((cur - 1) / 2)
      while(parent >=0 && heap[parent].val > heap[cur].val){
        swap(heap, parent, cur);
        cur = parent;
        parent = Math.floor((cur - 1) / 2)
      }
    }
  }
  return res.next
};
function heapify(arr, n, i){
  if (i >= n) return;
  let c1 = 2 * i + 1;
  let c2 = 2 * i + 2;
  let min = i;
  if (c1 <= n && arr[c1].val < arr[min].val) {
    min = c1;
  }
  if (c2 <= n && arr[c2].val < arr[min].val) {
    min = c2;
  }
  if (min != i) {
    swap(arr, i, min);
    heapify(arr, n ,min)
  }
}

function swap(arr, a, b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return;
}