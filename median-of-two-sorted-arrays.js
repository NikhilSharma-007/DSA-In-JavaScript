// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

// pseudocode: Better Solution Not Optimal --> T.C --> O(m+n)

// 1. **Initialize** an empty array `merged`.
// 2. **Initialize** two pointers `i = 0` and `j = 0`.
// 3. **Merge the arrays**:
//    - While both `i` is less than the length of `nums1` and `j` is less than the length of `nums2`:
//      - If `nums1[i]` is less than `nums2[j]`, push `nums1[i]` to `merged` and increment `i`.
//      - Otherwise, push `nums2[j]` to `merged` and increment `j`.
// 4. **Add remaining elements**:
//    - While `i` is less than the length of `nums1`, push `nums1[i]` to `merged` and increment `i`.
//    - While `j` is less than the length of `nums2`, push `nums2[j]` to `merged` and increment `j`.
// 5. **Find the median**:
//    - Calculate `mid` as the floor of the length of `merged` divided by 2.
//    - If the length of `merged` is even, return the average of the elements at `mid - 1` and `mid`.
//    - If the length of `merged` is odd, return the element at `mid`.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [];

  let i = (j = 0);

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }
  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};

//Optimal Solution --> Binary Search --> T.C --> O(log(min(m,n)))
