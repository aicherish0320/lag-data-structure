// 使用链表指针获取 JSON 的节点值

const json = {
  a: { b: { c: 1 } },
  d: { e: 2 }
}

const path = ['a', 'b', 'c']

let p = json

path.forEach((key) => {
  p = p[key]
})

console.log(p)
