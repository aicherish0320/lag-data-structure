/*
  typeof 操作符返回一个字符串，表示未经计算的操作数的类型
  语法：typeof 运算符后接操作数
  typeof operand (operand 一个表示对象或原始值的表达式，其类型将被返回)
*/
//! Test
// number
typeof 37 === 'number'
typeof 3.14 === 'number'
typeof 24 === 'number'
typeof NaN === 'number'
typeof Number(1) === 'number' // Number 会尝试把参数解析成数值
typeof 42n === 'bigint'

// string
typeof '' === 'string'
typeof typeof 1 === 'string'
typeof String(1) === 'string'

// boolean
typeof true === 'boolean'
typeof Boolean(1) === 'boolean'
typeof !!1 === 'boolean'

// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// undefined
typeof undefined === 'undefined'

// Object
typeof { a: 1 } === 'object'
typeof [1, 2] === 'object'
typeof new Date() === 'object'
//!注意
typeof new Boolean(true) === 'object'
typeof new Number(1) === 'object'
// function
typeof function () {} === 'function'
typeof class C {} === 'function'

// ! typeof null
// JavaScript 诞生以来便如此
typeof null === 'object'
// 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是0。由于 null 代表的是空指针（大多数平台下值为0x00），因此，null的类型标签是0，typeof null === 'object'
// ! 获取数据类型
// console.log(Object.prototype.toString.call([]))
// console.log(Object.prototype.toString.call({}))
// console.log(Object.prototype.toString.call(''))
