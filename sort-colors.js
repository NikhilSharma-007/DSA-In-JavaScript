// https://leetcode.com/problems/sort-colors/description/

// Solution 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let count = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  // Place all 0s
  for (let i = 0; i < count[0]; i++) {
    nums[i] = 0;
  }

  // Place all 1s
  for (let i = count[0]; i < count[0] + count[1]; i++) {
    nums[i] = 1;
  }

  // Place all 2s
  for (let i = count[0] + count[1]; i < count[0] + count[1] + count[2]; i++) {
    nums[i] = 2;
  }
};

// Solution 2 'The Dutch National Flag Algorithm'

// Intuition
// We must solve this problem using 'The Dutch National Flag Algorithm' (DNF)

// DNF : is designed to sort an array containing three distinct values (in this case 0, 1, 2) with a single traversal. The key intuition behind this algorithm is to use three pointer (low, mid, high) to partition the array into three segments:

// less that the mid-point (low to mid-1): elements are 0
// equal to the mid-point (mid to high): elements are 1
// greater that the mid-point (high+1 to end): elements are 2

// Approach
// 1. Initialize three pointers
// 2. Traverse the array with the mid pointer:
//     If nums[mid] is 0, swap it with nums[low], increment both low and mid.
//     If nums[mid] is 1, increment mid.
//     If nums[mid] is 2, swap it with nums[high], decrement high
// 3. continue until mid surpasses high

var sortColors = function (nums) {
  // Initialize pointers (3 pointer)
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  //Traverse the array with the mid pointer
  while (mid <= high) {
    // If the current element is 0, swap it with the element at low pointer
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // If the current element is 1, just move the mid pointer forward
      mid++;
    } else {
      //(nums[mid] === 2) If the current element is 2, swap it with the element at high pointer
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};
