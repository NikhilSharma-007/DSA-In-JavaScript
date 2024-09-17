//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

//Approach 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midLeft = (mid - 1 + nums.length) % nums.length;
    let midRight = (mid + 1) % nums.length;

    if (nums[mid] <= nums[midLeft] && nums[mid] <= nums[midRight]) {
      return nums[mid];
    } else if (nums[mid] <= nums[end]) {
      end = mid - 1;
    } else if (nums[mid] >= nums[start]) {
      start = mid + 1;
    }
  }
};

//Approach 2 [slightly Optimal]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // If mid element is greater than the end element, the minimum is in the right half
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      // Otherwise, the minimum is in the left half (including mid)
      end = mid;
    }
  }

  // When start meets end, we found the minimum element
  return nums[start];
};
