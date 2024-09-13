//https://leetcode.com/problems/minimum-window-substring/description/

// 1. Create a map for string t to store character frequencies (mapT)
// 2. Initialize variables:
//    - have = 0 (to track matched characters)
//    - need = number of unique characters in t
//    - i = 0 (start pointer of the window)
//    - minwinSize = Infinity (to track the minimum window size)
//    - result = "" (to store the result window)
//    - winCntMap (to track window character counts)

// 3. Loop through each character in s with j as the end pointer:
//    a. Update winCntMap for character s[j]
//    b. If count of s[j] in winCntMap matches count in mapT, increment have

// 4. While have equals need:
//    a. Check if current window size is smaller than minwinSize, update result
//    b. Decrease count of s[i] in winCntMap and move start pointer i forward
//    c. If count of s[i] in winCntMap becomes less than in mapT, decrement have

// 5. Return the result

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  let result = "";
  let mapT = new Map();

  for (let i = 0; i < t.length; i++) {
    mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
  }

  let have = 0,
    need = mapT.size;
  let i = 0;
  let minwinSize = Infinity;
  let winCntMap = new Map();

  for (let j = 0; j < s.length; j++) {
    winCntMap.set(s[j], (winCntMap.get(s[j]) || 0) + 1);

    if (winCntMap.get(s[j]) === mapT.get(s[j])) {
      have++;
    }

    while (have === need) {
      if (j - i + 1 < minwinSize) {
        minwinSize = j - i + 1;
        result = s.slice(i, j + 1);
      }

      winCntMap.set(s[i], winCntMap.get(s[i]) - 1);
      if (winCntMap.has(s[i]) && winCntMap.get(s[i]) < mapT.get(s[i])) {
        have--;
      }
      i++;
    }
  }
  return result;
};
