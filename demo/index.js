// 给定一个字符串，请统计字符串中出现最多的字母和次数

const str = 'acbcc'

const fn = (str) => {
  const map = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (!map[char]) {
      map[char] = 1
    } else {
      map[char]++
    }
  }

  let tempKey
  Object.keys(map).forEach((key) => {
    if (!tempKey) {
      tempKey = key
    }
    if (map[key] > map[tempKey]) {
      tempKey = key
    }
  })
  return [tempKey, map[tempKey]]
}

console.log('map >>> ', fn(str))
