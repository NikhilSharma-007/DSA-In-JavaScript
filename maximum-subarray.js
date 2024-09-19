//https://leetcode.com/problems/maximum-subarray/

// 1. Initialize `curMax` to 0 and `max` to the smallest possible value (-Infinity).
// 2. For each element in the array:
//    a. Set `curMax` to the maximum of the current element or the sum of `curMax` and the current element.
//    b. Update `max` to the maximum of `max` and `curMax`.
// 3. Return `max` as the result, which will be the maximum subarray sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curMax = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    (curMax = Math.max(nums[i], curMax + nums[i])),
      (max = Math.max(max, curMax));
  }
  return max;
};
