const user = {
  name: 'Neo',
  age: 22
}

// const name = user.name
// const abc = user.email || 'default@gmail.com'
const { email: abc = 'default@gmail.com' } = user
console.log(abc) // undefined

for (const key in user) {
}
