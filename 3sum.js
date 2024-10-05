// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Info

// triplets must not be duplicate
// there sum equals to 0
// return the array of triplets

// Two Pointers Approach

var threeSum = function (nums) {
  const ans = [];
  let n = nums.length;
  if (n < 3) return ans;
  let sum = 0;

  nums.sort((a, b) => a - b);
  console.log("N", nums);

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        while (nums[j + 1] === nums[j]) j++; //removing duplicates
        while (nums[k - 1] === nums[k]) k--; //removing duplicates
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
    while (nums[i + 1] === nums[i]) i++; //removing duplicates
  }
  return ans;
};
