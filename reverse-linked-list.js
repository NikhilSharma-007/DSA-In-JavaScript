//https://leetcode.com/problems/reverse-linked-list/description/

// 1. Initialize `prev` as `null`.
// 2. Set `curr` to `head`.
// 3. While `curr` is not `null`:
//     - Store `curr.next` in a temporary variable (`temp`).
//     - Set `curr.next` to `prev`.
//     - Move `prev` to `curr`.
//     - Move `curr` to `temp`.
// 4. Return `prev` (new head of the reversed list).

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};
