# 栈是什么？

- 一个先进先出的数据结构
- JavaScript 中没有栈，但可以用 Array 实现栈的所有功能

# 栈的应用场景

- 需要后进先出的场景
- 比如：十进制转二进制、判断字符串的括号是否有效、函数调用堆栈

## 有效括号

1. 越靠后的左括号，对应的右括号越靠前
2. 左括号入栈，右括号出栈，最后栈空了就是合法的
