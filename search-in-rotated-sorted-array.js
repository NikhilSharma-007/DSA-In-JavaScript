//https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// Pseudocode:

// 1. **binarySearch(nums, target, start, end)**:
//     - Initialize `l` to `start` and `h` to `end`.
//     - While `l` is less than or equal to `h`:
//         - Calculate `mid` as the middle index between `l` and `h`.
//         - If `nums[mid]` is equal to `target`, return `mid`.
//         - If `nums[mid]` is less than `target`, set `l` to `mid + 1`.
//         - If `nums[mid]` is greater than `target`, set `h` to `mid - 1`.
//     - If the target is not found, return `-1`.

// 2. **findMin(nums)**:
//     - Initialize `min` to infinity and `minIndex` to 0.
//     - Loop through the array `nums`:
//         - If `nums[i]` is less than `min`, update `min` and set `minIndex` to `i`.
//     - Return `minIndex`.

// 3. **search(nums, target)**:
//     - Set `start` to 0 and `end` to the length of `nums`.
//     - Find the index of the minimum element in `nums` using `findMin(nums)`.
//     - Perform a binary search in two parts:
//         - First, from `start` to `min-1`.
//         - Second, from `min` to `end`.
//     - If the target is found in the first part, return its index; otherwise, return the result from the second part.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearach = (nums, target, start, end) => {
  let l = start;
  let h = end;

  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return -1;
};

const findMin = (nums) => {
  let min = Infinity;
  let minIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      minIndex = i;
    }
  }
  return minIndex;
};

var search = function (nums, target) {
  let start = 0,
    end = nums.length;

  let min = findMin(nums);

  let a1 = binarySearach(nums, target, start, min - 1);
  let a2 = binarySearach(nums, target, min, end);

  if (a1 === -1) {
    return a2;
  } else {
    return a1;
  }
};
