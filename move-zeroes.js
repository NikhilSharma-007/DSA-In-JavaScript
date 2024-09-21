// https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0; // Index to track non-zero elements
  let j = 0; // Index to track the next position for non-zero elements

  while (j < nums.length) {
    if (nums[j] !== 0) {
      // Swap if a non-zero element is found
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++; // Move the non-zero index forward
    }
    j++; // Always move the 'j' index forward to check the next element
  }
};
