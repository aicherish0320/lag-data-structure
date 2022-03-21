/*
  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0
  let result = 0
  const map = new Map()
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) > l) {
      l = map.get(s[r]) + 1
    }
    result = Math.max(result, r - l + 1)
    map.set(s[r], r)
  }
  return result
}

lengthOfLongestSubstring('abba')
