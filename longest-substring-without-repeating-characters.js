//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

//pseudocode:
// function longestSubstring(s):
//   if s is empty, return 0

//   create a map to store character counts
//   initialize i (start of window) and j (end of window) to 0
//   initialize maxLen to 0

//   while j is less than the length of s:
//     add s[j] to map, incrementing its count

//     if the size of map is equal to the window size (j - i + 1):
//       update maxLen to the maximum of itself and the window size
//       increment j
//     else if the size of map is less than the window size:
//       while the size of map is less than the window size:
//         decrement the count of s[i] in map
//         if the count becomes 0, remove s[i] from map
//         increment i
//       increment j

//   return maxLen

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let map = new Map();
  let i = 0,
    j = 0,
    maxLen = 0;

  while (j < s.length) {
    map.set(s[j], (map.get(s[j]) || 0) + 1);

    if (map.size === j - i + 1) {
      maxLen = Math.max(maxLen, j - i + 1);
      j++;
    } else if (map.size < j - i + 1) {
      while (map.size < j - i + 1) {
        map.set(s[i], map.get(s[i]) - 1);
        if (map.get(s[i]) === 0) {
          map.delete(s[i]);
        }
        i++;
      }
      j++;
    }
  }
  return maxLen;
};
