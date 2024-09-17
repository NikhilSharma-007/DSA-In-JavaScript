//https://leetcode.com/problems/kth-largest-element-in-an-array/description/

// Pseudocode
// function findKthLargest(nums, k):
//     initialize minPriQue as an empty Min Priority Queue

//     for each num in nums:
//         add num to minPriQue

//         if size of minPriQue > k:
//             remove the smallest element from minPriQue

//     return the smallest element in minPriQue

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minPriQue = new MinPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    minPriQue.enqueue(nums[i]);

    if (minPriQue.size() > k) {
      minPriQue.dequeue();
    }
  }
  return minPriQue.front().element;
};
