/*
  instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
  语法：object instanceof constructor (object 某个实例对象)
  描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上
*/

// ! Test1
// 定义构造函数
// function C() {}
// function D() {}
// const o = new C()

// o instanceof C // true，因为 Object.getPrototypeOf(o) === C.prototype
// o instanceof D // false，因为 D.prototype 不在 o 的原型上

// o instanceof Object // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
// C.prototype instanceof Object // true

// C.prototype = {}
// const o2 = new C()
// o2 instanceof C // true
// o instanceof C // false，因为 C.prototype 指向了空对象，这个空对象不在 o 的原型链上

// D.prototype = new C() // 继承
// const o3 = new D()
// o3 instanceof D // true
// o3 instanceof C // true

/*
  演示 String 对象 和 Date 对象都属于 Object 类型和一些特殊情况
  下面的代码使用了 instanceof 来证明： String 和 Date 对象同时也属于 Object 类型（他们是由 Object）类派生出来的
  但是，使用对象文字符号创建的对象在这里是一个例外：虽然原型未定义，但 instanceof Object 返回 true
*/
// ! Test2
// const simpleStr = 'This is a simple string'
// const myString = new String()
// const newStr = new String('String created with constructor')
// const myDate = new Date()
// const myObj = {}
// const myNonObj = Object.create(null)

// simpleStr instanceof String // false 非对象实例
// console.log(Object.getPrototypeOf(simpleStr) === String.prototype)

// myString instanceof String
// newStr instanceof String
// myString instanceof Object

// myObj instanceof Object // true
// // ({}) instanceof Object // true
// myNonObj instanceof Object // false

// myString instanceof Date // false

// myDate instanceof Date // true
// myDate instanceof Object // true
// myDate instanceof String // false

//!实现
// function myInstanceof(ins, ctr) {
//   let proto
//   while ((proto = Object.getPrototypeOf(ins))) {
//     if (proto === ctr.prototype) {
//       return true
//     }
//   }
//   return false
// }

// const str1 = '123'
// const str2 = new String('123')
// console.log(myInstanceof(str1, String))
// console.log(myInstanceof(str2, String))
// console.log(myInstanceof(str2, Object))
