//https://leetcode.com/problems/linked-list-cycle/

// pseudocode:-

// 1. Initialize two pointers, `slow` and `fast`, both pointing to the `head` of the list.
// 2. While `fast` and `fast.next` are not `null`:
//     - Move `slow` one step forward (`slow = slow.next`).
//     - Move `fast` two steps forward (`fast = fast.next.next`).
//     - If `slow` is equal to `fast`, a cycle is detected. Return `true`.
// 3. If the loop ends, it means there is no cycle. Return `false`.

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
var hasCycle = function (head) {
  let slow = (fast = head);

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
};
