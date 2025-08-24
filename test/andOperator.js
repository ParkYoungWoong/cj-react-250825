console.log(true && false) // false
console.log(true || false) // true

console.log(true && null && false) // null
console.log(true && null && 0 && false) // null
console.log(true && 0 && null && false) // 0
console.log(true && 1 && {} && []) // []

console.log(false || true) // true
console.log(false || 0 || true) // true
console.log(false || 0 || 9 || true) // 9
