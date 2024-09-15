//https://leetcode.com/problems/merge-k-sorted-lists/

// pseudocode for the `mergeKLists`

// 1. **Function `mergeTwoLists`**:
//     - Input: Two sorted linked lists `list1` and `list2`.
//     - Create a temporary node `tempNode` to serve as a starting point.
//     - Set `currNode` to `tempNode`.
//     - While both `list1` and `list2` are not null:
//         - If `list1.val` is smaller than `list2.val`, set `currNode.next` to `list1` and move `list1` to the next node.
//         - Otherwise, set `currNode.next` to `list2` and move `list2` to the next node.
//         - Move `currNode` to the next node.
//     - Attach the remaining nodes from `list1` or `list2` to `currNode.next`.
//     - Return `tempNode.next` (the merged sorted list).

// 2. **Function `mergeKLists`**:
//     - Input: An array `lists` of sorted linked lists.
//     - If `lists` is empty, return `null`.
//     - Set `head` to the first list in `lists`.
//     - For each list in `lists` starting from the second one:
//         - Merge `head` with the current list using `mergeTwoLists`.
//         - Update `head` to be the merged result.
//     - Return `head` (the final merged sorted list).

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

let mergeTwoLists = function (list1, list2) {
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
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  let head = lists[0];

  for (let i = 1; i < lists.length; i++) {
    head = mergeTwoLists(head, lists[i]);
  }

  return head;
};

//////Optimal Method

// Pseudocode:

// function mergeKLists(lists):
//     Create a priority queue (min-heap)

//     # Add the head of each list to the priority queue
//     for each list in lists:
//         if list is not empty:
//             add head node to priority queue

//     # Create a dummy node for the result list
//     result = new ListNode()
//     head = result

//     # Merge process
//     while priority queue is not empty:
//         node = dequeue the smallest node from the priority queue
//         result.next = new ListNode(node.value)
//         result = result.next

//         if node.next is not null:
//             add node.next to the priority queue

//     return head.next

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
var mergeKLists = function (lists) {
  const queue = new MinPriorityQueue({ priority: (x) => x.val });

  for (const head of lists) {
    if (head) {
      queue.enqueue(head);
    }
  }

  let result = new ListNode();
  let head = result;

  while (!queue.isEmpty()) {
    const element = queue.dequeue().element;
    const val = element.val;
    const next = element.next;

    result.next = new ListNode(val);
    result = result.next;

    if (next) {
      queue.enqueue(next);
    }
  }

  return head.next;
};
