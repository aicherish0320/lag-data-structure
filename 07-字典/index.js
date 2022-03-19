const m = new Map()

m.set('a', 'aa')
m.set('b', 'bb')

m.delete('a')

// m.clear()
m.set('b', 'dd')

console.log(m)
