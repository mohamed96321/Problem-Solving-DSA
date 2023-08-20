/**
 * @param Reverse_LinkedList
 */

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

let reverseList = head => {
  let prev = null;
  while(head){
    // save next
    const curr = head;
    head = head.next
    // reverse
    curr.next = prev
    // advance prev and curr
    prev = curr
  }
  return prev;
};

let data = reverseList({
  data: 1,
  next: {
    data:2,
    next: {
      data: 3,
      next: {
        data: 4
      }
    }
  }
});

console.log(data)
