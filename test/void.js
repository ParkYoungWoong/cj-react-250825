const hello = () => {
  // return undefined
}

function a() {
  return hello() // undefined
}
function b() {
  hello()
}
console.log(a()) // undefined
console.log(b()) // undefined
