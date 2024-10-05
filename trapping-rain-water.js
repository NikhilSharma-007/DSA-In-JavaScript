// https://leetcode.com/problems/trapping-rain-water/description/

// Pseudocode: Two Pointer Approach

// 1. Initialize two pointers `l` (left) at 0 and `r` (right) at the end of the array.
// 2. Initialize `lmax` and `rmax` to 0 to store the maximum heights on both sides.
// 3. Initialize `result` to 0 for accumulating the trapped water.
// 4. While `l` is less than `r`:
//    - If the height at `l` is less than or equal to height at `r`:
//      - If height at `l` is greater than `lmax`, update `lmax`.
//      - Else, add the difference between `lmax` and height at `l` to `result`.
//      - Move `l` pointer to the right.
//    - Else:
//      - If height at `r` is greater than `rmax`, update `rmax`.
//      - Else, add the difference between `rmax` and height at `r` to `result`.
//      - Move `r` pointer to the left.
// 5. Return `result` as the total trapped water.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0;
  let r = height.length - 1;
  let lmax = (rmax = 0);
  let result = 0;

  while (l < r) {
    if (height[l] <= height[r]) {
      if (height[l] > lmax) {
        lmax = height[l];
      } else {
        result += lmax - height[l];
      }
      l++;
    } else {
      if (height[r] > rmax) {
        rmax = height[r];
      } else {
        result += rmax - height[r];
      }
      r--;
    }
  }
  return result;
};
