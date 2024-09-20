//https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/

// pseudocode :

// The function `check` takes an array `nums` as input and returns a boolean value. The algorithm works as follows:

// 1. Initialize a variable `count` to keep track of the number of times the current element is less than the previous element.
// 2. Iterate through the array `nums` starting from the second element (index 1), and check if the current element is less than the previous element. If so, increment the `count` variable.
// 3. After the loop, check if the last element of `nums` is greater than the first element. If so, increment the `count` variable.
// 4. Print the value of `count`.
// 5. If `count` is less than or equal to 1, return `true`, otherwise return `false`.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;
    }
  }
  if (nums[nums.length - 1] > nums[0]) {
    count++;
  }
  console.log(count);
  return count <= 1 ? true : false;
};
