/*
  JS 数据类型：
    1. 基础类型
      String Number Boolean null undefined symbol
    2. 引用类型
      Object Array Function
*/

function isObject(val) {
  return typeof val === 'object' && val !== null
}

function getType(val) {
  if (isObject(val)) {
    return Object.prototype.toString
      .call(val)
      .match(/\[object\s([a-zA-Z]*)\]/)[1]
      .toLowerCase()
  } else {
    return typeof val
  }
}

function fn() {}

console.log(getType(1))
console.log(getType('1'))
console.log(getType(null))
console.log(getType(undefined))
console.log(getType(fn))
