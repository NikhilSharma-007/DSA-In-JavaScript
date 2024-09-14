//https://leetcode.com/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let mp = new Map();

  for (let i = 0; i < magazine.length; i++) {
    mp.set(magazine[i], (mp.get(magazine[i]) || 0) + 1);
  }
  let i = 0;
  while (i < ransomNote.length) {
    if (mp.has(ransomNote[i])) {
      mp.set(ransomNote[i], mp.get(ransomNote[i]) - 1);
      i++;
      if (mp.get(ransomNote[i]) < 1) {
        mp.delete(ransomNote[i]);
      }
    } else {
      return false;
    }
  }
  return true;
};
