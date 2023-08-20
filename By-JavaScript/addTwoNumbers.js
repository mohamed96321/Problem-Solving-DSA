/**
 * @param Add_Two_Numbers
 */

function ListNode(next, val) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let prevNode = new ListNode();
  const headNode = prevNode;

  while(l1 || l2 || carry) {
      let val1 = 0;
      let val2 = 0;
      if (l1) {
          val1 = l1.val;
          l1 = l1.next;
      }
      if (l2) {
          val2 = l2.val;
          l2 = l2.next;
      }
      const sum = val1 + val2 + carry;
      // carry = sum > 9 ? 1 : 0;
      carry = Math.floor(sum / 10);
      const digit = sum % 10;
      const currNode = new ListNode(digit);
      prevNode.next = currNode;
      prevNode = currNode;
  }
  return headNode.next;
};
