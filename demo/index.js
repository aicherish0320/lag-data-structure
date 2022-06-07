/**
 * 判断一个字符串是否括号匹配
 */

const str = '[{[}]]'

const fn = (str) => {
  if (str.length % 2 !== 0) return false
  // 栈
  const stack = []

  for (let i = 0; i < str.length; i++) {
    const value = str[i]
    if (['[', '{', '('].indexOf(value) > -1) {
      stack.push(value)
    } else {
      const last = stack[stack.length - 1]
      if (
        (last === '[' && value === ']') ||
        (last === '{' && value === '}') ||
        (last === '(' && value === ')')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  console.log('stack >>> ', stack.length)
  return !stack.length
}

console.log(fn(str))
