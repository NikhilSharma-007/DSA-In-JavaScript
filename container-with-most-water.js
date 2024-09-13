//https://leetcode.com/problems/container-with-most-water/description/

// 1. Initialize two pointers, start and end, pointing to the first and last elements of the array, respectively.
// 2. Initialize a variable, maxArea, to 0 to store the maximum area found so far.

// 3. While start is less than end:
//     a. Calculate the current area by multiplying the height of the shorter side and the distance between the two pointers (end - start).
//     b. Update maxArea if the current area is greater.
//     c. If the height of the shorter side is less than the height of the taller side, increment start. Otherwise, decrement end.
//4. return the maxArea

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;
  let currArea;

  while (start < end) {
    currArea = Math.min(height[start], height[end]) * (end - start);

    maxArea = Math.max(maxArea, currArea);

    height[start] < height[end] ? start++ : end--;
  }
  return maxArea;
};
