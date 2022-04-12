# 拉钩前端-数据结构与算法

## 理论

- 数据结构：栈、队列、集合、链表、字典、树、图、堆
- 进阶算法：冒泡算法、选择算法、插入算法、归并算法、快速算法、顺序算法、二分搜索
- 算法设计思想：分而治之、动态规划、贪心、回溯

- 数据结构：计算机存储、组织数据的方法，就像锅碗瓢盆。
- 算法：一系列解决问题的清晰指令，就像食谱。

## 数据结构与算法的关系

- 程序=数据结构+算法
- 数据结构为算法提供服务，算法围绕数据结构操作。

## 时间复杂度

- O(1)

## 空间复杂度

- 一个函数，用大 O 表示，比如 O(1)、O(n)、O(n^2)
- 算法在运行过程中临时占用存储空间大小的量度

```js
// O(1)
let i = 0
i += 1
// O(n)
const list = []
for (let i = 0; i < n; i += 1) {
  list.push(i)
}
// O(n^2)
const matrix = []
for (let i = 0; i < n; i += 1) {
  matrix.push([])
  for (let j = 0; j < n; j += 1) {
    matrix[i].push([j])
  }
}
```

## 栈

### 1. 概念

- 栈是一种遵从后进先出原则的有序集合。
- 添加新元素的一端称为栈顶，另一端称为栈底。
- 操作栈的元素时，只能从栈顶操作（添加、移除或取值）
- 只能从栈顶进行存取操作

### 2. 实现

- push() 入栈方法
- pop() 出栈方法
- top() 获取栈顶值
- size() 获取栈的元素个数
- clear() 清空栈

## 队列

### 概念

- 队列是一种遵循先进先出原则的有序集合。
- 添加新元素的一端称为队尾，另一段称为队首。
- 队尾添加元素，队首用来移除元素。

### 实现

- enqueue 入队（队尾）
- dequeue 出队（队首）
- top 获取队首值
- size 获取队列个数
- clear 清空队列

### 双端队列

- 双端队列(double-ended queue) 指的是允许同时从队尾和队首两端进行存取操作的队列，操作更加灵活。
- 双端队列与 JavaScript 中的数组操作十分类似，只是不允许在数组两端以外的位置进行存取操作。

#### 实现

- addFront/addBack
- removeFront/removeBack
- frontTop/backTop

## 链表

- 链表的概念
  链表是有序的数据结构
  可以从首、尾、中间进行数据存取
  数组也可以进行此类操作，为什么不直接使用数组呢？主要体现在性能上
  数组在内存中占用一段连续的空间
  添加、移除会导致后续元素位移，性能开销大
  - 链表的概念
    - 链表是有序的数据结构，链表中的每个部分称为节点
    - 链表可以从首、尾、中间进行数据存取
    - 链表的元素在内存中不必是连续的空间
    - 优点：添加与删除不会导致其余元素位移
    - 缺点：无法根据索引快速定位元素
  - 小结
    - 获取、修改元素时，数组效率高
    - 添加、删除元素时，链表效率高
- 链表的实现
- 链表的多种形式
  - 双向链表
    - 双向链表指的是在普通链表的基础上，增加一个用于记录上一个节点的属性 prev，可进行双向访问。
  - 循环链表（环形链表）
    - 循环链表又称为环形链表，指的是链表最后一个节点的 next 指向第一个节点，形成首尾相连的循环结构，称为循环列表。
    - 在实际使用中，环的结束点可以为链表的任意节点。
