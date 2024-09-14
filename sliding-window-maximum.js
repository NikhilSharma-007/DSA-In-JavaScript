//https://leetcode.com/problems/sliding-window-maximum/

// ### Pseudocode

// 1. Initialize:
//    - `deque` to store indices (or values) in the current window in decreasing order.
//    - `result` as an empty list to store the maximum values.
//    - `i` (start of the window) and `j` (end of the window) to 0.

// 2. Loop while `j` is less than the length of `nums`:
//    - Remove elements from the `deque` from the back if they are smaller than `nums[j]`.
//    - Add `nums[j]` to the `deque`.

// 3. If the window size (`j - i + 1`) is equal to `k`:
//    - Add the front of the `deque` (the maximum) to `result`.
//    - If the front of the `deque` is equal to `nums[i]`, remove it (as it will exit the window).
//    - Increment `i` to slide the window forward.

// 4. Increment `j` to expand the window.

// 5. Return `result`.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let deque = []; // stores indices of nums
  let result = [];
  let i = (j = 0);

  while (j < nums.length) {
    while (deque.length > 0 && deque[deque.length - 1] < nums[j]) {
      deque.pop();
    }

    deque.push(nums[j]);

    if (j - i + 1 == k) {
      result.push(deque[0]);

      if (deque[0] === nums[i]) {
        deque.shift();
      }

      i++;
    }
    j++;
  }
  return result;
};
