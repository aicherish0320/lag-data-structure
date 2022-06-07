/**
 * 查找字符串中重复最多的字符和次数
 */

const str = 'aabbccceeee44444ppppppp'

const fn = (arr) => {
  let i, j
  const length = arr.length
  const ret = {
    char: '',
    length: 0
  }

  let tempLength = 0

  for (i = 0, j = 0; i < length; i++) {
    if (arr[i] === arr[j]) {
      tempLength++

      if (i === length - 1) {
        if (tempLength > ret.length) {
          ret.length = tempLength
          ret.char = str[j]
        }
      }

      continue
    }

    // 不相等
    if (tempLength > ret.length) {
      ret.length = tempLength
      ret.char = str[j]
    }

    tempLength = 0

    j = i
    i--
  }

  return ret
}

console.log(fn(str))
