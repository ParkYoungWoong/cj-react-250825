// const nums1 = [1, 2, 3]
// const nums2 = [3, 4, 5]

// const newNums = nums1.concat(nums2)
// const newNums = [...nums1, ...nums2]
// const newNums = [1, 2, 3, 3, 4, 5]

// console.log(newNums) // [1,2,3,3,4,5]

// Rest Parameter
const nums1 = [1, 2, 3, 4, 5]

const [a, b, ...c] = nums1

console.log(a, b) // 1 2
console.log(c) // [3, 4, 5]

const user = {
  name: 'Neo',
  age: 22,
  isValid: true,
  email: 'neo@test.com'
}
const { age, email, ...rest } = user

console.log(age) // 22
console.log(email) // 'neo@test.com'
console.log(rest) // {  name: 'Neo', isValid: true }
