// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

// 1. Initialize `size` to 0.
// 2. Set `temp` to `head`.
// 3. **Traverse the list** to find its length:
//    - While `temp` is not null:
//      - Move `temp` to the next node.
//      - Increment `size`.
// 4. Calculate `removeIdx` as `size - n + 1`.
// 5. **If** `removeIdx` is 1:
//    - Return `head.next` (the new head of the list).
// 6. Set `curr` to `head`.
// 7. **Traverse to the node before the one to remove:**
//    - Loop from 0 to `removeIdx - 2`:
//      - Move `curr` to the next node.
// 8. Adjust pointers to remove the node:
//    - Set `curr.next` to `curr.next.next`.
// 9. Return `head`.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let size = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    size++;
  }
  removeIdx = size - n + 1;

  if (removeIdx === 1) {
    return head.next;
  }

  let curr = head;

  for (let i = 0; i < removeIdx - 2; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;

  return head;
};
