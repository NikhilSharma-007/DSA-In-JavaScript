//https://leetcode.com/problems/sort-list/description/

// pseudocode:

// 1. **Base Case**: If the head of the linked list is null or has only one node, return the head.

// 2. **Divide**:
//    - Find the middle of the linked list using the `findMid` function.
//    - Split the linked list into two halves: `lefthead` and `righthead`.

// 3. **Conquer**:
//    - Recursively sort the `lefthead` list using `sortList`.
//    - Recursively sort the `righthead` list using `sortList`.

// 4. **Merge**:
//    - Merge the two sorted lists (`lefthead` and `righthead`) using the `merge2sortedlist` function.

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

const findMid = (head) => {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const merge2sortedlist = (list1, list2) => {
  let tempNode = new ListNode();
  let currNode = tempNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
    currNode = currNode.next;
  }
  currNode.next = list1 || list2;

  return tempNode.next;
};

var sortList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let mid = findMid(head);
  let lefthead = head;
  let righthead = mid.next;
  mid.next = null;

  lefthead = sortList(lefthead);
  righthead = sortList(righthead);

  return merge2sortedlist(lefthead, righthead);
};
