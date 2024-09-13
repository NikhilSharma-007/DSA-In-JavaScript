//https://leetcode.com/problems/group-anagrams/description/

// 1. **Initialize**:
//    - Create an empty map `mp` to store sorted string keys and their corresponding indices in `ans`.
//    - Create an empty list `ans` to store groups of anagrams.

// 2. **Process Each String**:
//    - For each string `s` in the input list `strs`:
//      1. **Generate Key**:
//         - Split `s` into characters.
//         - Sort the characters.
//         - Join the sorted characters to form a key `temp`.
//      2. **Check Map**:
//         - If `temp` exists in `mp`:
//           - Retrieve the index from `mp` where `temp` is stored.
//           - Append `s` to the list at this index in `ans`.
//         - If `temp` does not exist in `mp`:
//           - Set `temp` in `mp` with the current length of `ans` as the index.
//           - Create a new list containing `s` and add this list to `ans`.

// 3. **Return Result**:
//    - Return the list `ans`, which contains grouped anagrams.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let mp = new Map();
  let ans = [];

  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split("").sort().join("");

    if (mp.has(temp)) {
      ans[mp.get(temp)].push(strs[i]);
    } else {
      mp.set(temp, ans.length);
      ans.push([strs[i]]);
    }
  }
  return ans;
};
