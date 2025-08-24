import { useState } from 'react'

export default function App() {
  // let count = 0
  const [count, setCount] = useState(0)

  function increase() {
    // count += 1
    const value = count + 1
    setCount(value)
    console.log(value)
  }

  return <h1 onClick={increase}>Hello {count}!</h1>
}
