# 树

## 树是什么呢？

- 一种分层数据的抽象模型
- 前端工作中常见的树包括：DOM、树、级联选择、树形控件
- JS 中没有树，但是可以用 Object 和 Array 构建树
- 树的常用操作：深度/广度优先遍历、先中后序遍历

## 什么是深度/广度优先遍历

- 深度优先遍历：尽可能深的搜索树的分支
- 广度优先遍历：先访问离根节点最近的节点

## 深度优先遍历算法口诀

- 访问根节点
- 对根节点的 children 挨个进行深度优先遍历

## 广度优先遍历算法口诀

- 新建一个队列，把根节点入队
- 把队头出队并访问
- 把队头的 children 挨个入队
- 重复第二、三步，直到队列为空

# 二叉树

- 树种每个节点最多只能有两个子节点
- 在 JS 中通过用 Object 来模拟二叉树

## 先序遍历算法口诀

- 访问根节点
- 对根节点的左子树进行先序遍历
- 对根节点的右子树进行先序遍历

## 中序遍历算法口诀

- 对根节点的左子树进行中序遍历
- 访问根节点
- 对根节点的右子树进行中序遍历

## 后续遍历算法的口诀

- 对根节点的左子树进行后序遍历
- 对根节点的右子树进行后序遍历
- 访问根节点
