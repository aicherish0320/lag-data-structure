// 给定一个字符串，请统计字符串中连续字符出现的字符和次数
const str = 'aaacacccc'

const fn1 = (str) => {
  let count = 0
  let last = { count: 0 }
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++
        if (j === str.length - 1) {
          if (count > last.count) {
            last = { count, char: str[i] }
          }
          count = 0
        }
      } else {
        if (count > last.count) {
          last = { count, char: str[i] }
        }
        count = 0
        break
      }
    }
  }
  console.log(count, last)
}

const fn2 = (str) => {
  let current = 0
  let last = { count: 0 }

  let i, j
  for (i = 0, j = 0; i < str.length; j++) {
    if (str[i] === str[j]) {
      current++
      if (j === str.length - 1) {
        if (current > last.count) {
          last = { count: current, char: str[i] }
        }
        current = 0
      }
    } else {
      if (current > last.count) {
        last = { count: current, char: str[i] }
      }

      current = 0

      i = j
      j--
    }
  }

  console.log(last)
}

fn2(str)
