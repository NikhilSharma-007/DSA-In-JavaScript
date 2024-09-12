//https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/*
// Initialize:

Create an empty array ans to store starting indices of anagrams.
Create countP to store the frequency of characters in p.
Create countWindow to store the frequency of characters in the current window of s.

// Populate countP:

For each character in p, update countP with the frequency of each character.

//Sliding window over s:

For each character s[j] in string s:
Add s[j] to countWindow and update its frequency.
If the window size exceeds the length of p, decrement the count of the leftmost character (s[i]) in countWindow and remove it if its count is 0.
Move the left pointer i to shrink the window.

// Check for an anagram:

If countWindow and countP are equal, add the index i to the result array ans.
Return ans:

Return the array containing the starting indices of all anagrams found.

*/

const mapsAreEqual = (map1, map2) => {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }
  return true;
};
var findAnagrams = function (s, p) {
  let ans = [];
  let countP = new Map();

  for (let i = 0; i < p.length; i++) {
    countP.set(p[i], (countP.get(p[i]) || 0) + 1);
  }

  let i = 0;
  let j = 0;
  let countWindow = new Map();

  while (j < s.length) {
    countWindow.set(s[j], (countWindow.get(s[j]) || 0) + 1);

    if (j - i + 1 > p.length) {
      countWindow.set(s[i], countWindow.get(s[i]) - 1);
      if (countWindow.get(s[i]) === 0) {
        countWindow.delete(s[i]);
      }
      i++;
    }

    if (mapsAreEqual(countP, countWindow)) {
      ans.push(i);
    }
    j++;
  }
  return ans;
};
