// const numbers = [6, 17, 20, 30]
// const a = numbers[0]
// const b = numbers[1]

// console.log(a, b) // 6, 17

// const [, , z] = numbers
// console.log(z) // 20

const user = {
  name: 'Neo',
  age: 22,
  isValid: true,
  email: 'neo@test.com'
}
// 명시적 vs 암시적
// null vs undefined
user.email // undefined

// const age = user.age
const { age, email = 'abc@gmail.com' } = user
console.log(age) // 22
console.log(email) // 'neo@test.com'
