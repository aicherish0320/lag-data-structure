const mySet = new Set()
const mySet2 = new Set([1, 5])

mySet.add(1)
mySet.add(2)
mySet.add(2)

// mySet.add('Hello')

// const obj = { msg: 'msg' }

// mySet.add(obj)

// mySet.add(obj)

// mySet.delete(2)

const has = mySet.has(2)

// console.log(mySet.values())
// console.log(mySet.keys())
// console.log(mySet.entries())

// console.log(mySet)

const intersection = new Set([...mySet].filter((item) => mySet2.has(item)))
const diff = new Set([...mySet].filter((item) => !mySet2.has(item)))

console.log(intersection, diff)
