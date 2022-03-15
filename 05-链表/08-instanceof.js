function _instanceof(A, B) {
  let p = A
  while (p) {
    if (A === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}

console.log(1)
