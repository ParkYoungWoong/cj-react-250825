import { useState } from 'react'

export default function App() {
  const [state, setState] = useState(0)

  function render() {
    if (state === 0) {
      return ''
    } else if (state === 1) {
      return <h1>Hello React!</h1>
    } else if (state === 2) {
      return <h1 style={{ color: 'red' }}>Hello React!</h1>
    } else {
      return <h1 style={{ backgroundColor: 'blue' }}>Hello React!</h1>
    }
  }

  return (
    <>
      <button onClick={() => setState(state + 1)}>클릭!</button>
      {render()}
    </>
  )
}
