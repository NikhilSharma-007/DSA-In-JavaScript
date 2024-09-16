// https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function (head) {
  if (head === null) {
    return;
  }

  // find the middle of linked list
  // in 1->2->3->4->5->6 find 4

  let slow = (fast = head);

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second part of the list
  // convert 1->2->3->4->5->6 into 1->2->3 and 6->5->4
  // reverse the second half in-place
  let prev = null;
  let curr = slow;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // merge two sorted linked lists
  // merge 1->2->3 and 6->5->4 into 1->6->2->5->3->4

  let first = head;
  let second = prev;

  while (second.next != null) {
    let temp1 = first.next;
    let temp2 = second.next;
    first.next = second;
    first = temp1;
    second.next = temp1;
    second = temp2;
  }
  return head;
};
