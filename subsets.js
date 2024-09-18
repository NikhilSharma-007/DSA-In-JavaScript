//https://leetcode.com/problems/subsets/description/

// Pseudocode
// Function generateSubsets(nums, currentSubset, result):
//     If nums is empty:
//         Add a copy of currentSubset to result
//         Return

//     Create op1 as a copy of currentSubset
//     Create op2 as a copy of currentSubset and add the first element of nums to op2

//     Remove the first element from nums
//     Call generateSubsets with remaining nums, op1, and result
//     Call generateSubsets with remaining nums, op2, and result

// Function subsets(nums):
//     Initialize result as an empty list
//     Call generateSubsets(nums, empty list, result)
//     Return result

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Recursive helper function to generate subsets
function generateSubsets(nums, op, ans) {
  if (nums.length === 0) {
    ans.push([...op]);
    return;
  }

  let op1 = [...op];
  let op2 = [...op];

  op2.push(nums[0]);

  let remainingNums = nums.slice(1);
  generateSubsets(remainingNums, op1, ans);
  generateSubsets(remainingNums, op2, ans);
}

var subsets = function (nums) {
  let ans = [];
  generateSubsets(nums, [], ans);
  return ans;
};
