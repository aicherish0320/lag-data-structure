# 链表

- 多个元素组成的列表
- 元素存储不连续，用 next 指针连在一起

## 数组和链表

- 数组：增删非首尾元素时往往需要移动元素
- 链表：增删非首尾元素，不需要移动元素，只需要更改 next 的指向即可

## JS 中的链表

js 中没有链表这个数据结构，可以使用 object 来模拟

## 原型链简介

- 原型链的本质是链表
- 原型链上的节点是各种原型对象，比如：`Function.prototype`、`Object.prototype`
- 原型链通过 `__proto__` 属性连接各种原型对象

> obj -> Object.prototype -> null
> func -> Function.prototype -> Object.prototype -> null
> arr -> Array.prototype -> Object.prototype -> null

### 原型链知识点

- 如果 A 沿着原型链能找到 B.prototype，那么 `A instanceof B` 为 true
- 如果在 A 对象上没有找到 x 属性，那么会沿着原型链找 x 属性

### 面试题一

> instanceof 的原理，并用代码实现

### 面试题二

```js
  var foo = {},
    F = function(){}
  Object.prototype.a = 'value a
  Function.prototype.b = 'value b

  console.log(foo.a)
  console.log(foo.b)

  console.log(F.a)
  console.log(F.b)
```

> 总结：链表里的元素存储不是连续的，之间通过 next 连接，JavaScript 中没有链表，但可以用 Object 模拟链表，链表常用操作：遍历链表、修改 next
