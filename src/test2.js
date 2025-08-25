// import { a, c } from './test1.js'
// import x from './test1.js'
import abc, { c } from './test.js'

console.log(c) // 333
console.log(abc) // 999

const user = {
  name: 'Neo',
  age: 22
}

const { age: num } = user
console.log(num) // 22
