//https://leetcode.com/problems/merge-two-sorted-lists/description/

// pseudocode:

// 1. Create a temporary node `tempNode` to act as a placeholder for the merged list.
// 2. Set `currNode` to point to `tempNode`.
// 3. While both `list1` and `list2` are not empty:
//    - If the value in `list1` is smaller than the value in `list2`:
//      - Attach `list1` to the merged list.
//      - Move to the next node in `list1`.
//    - Else:
//      - Attach `list2` to the merged list.
//      - Move to the next node in `list2`.
//    - Move `currNode` to the next node in the merged list.
// 4. Attach the remaining nodes from `list1` or `list2` (whichever is not empty) to the merged list.
// 5. Return `tempNode.next` (the head of the merged list, skipping the placeholder node).

// This pseudocode captures the key steps of the merging process while omitting the specific syntax details of the original implementation.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
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
