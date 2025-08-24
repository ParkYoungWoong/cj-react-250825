import { useState } from 'react'
import clsx from 'clsx'

export default function App() {
  // let text = 'Hello~'
  const [text, setText] = useState('Hello~')
  const [isActive, setIsActive] = useState(false)
  const [fontSize, setFontSize] = useState(40)

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') {
            console.log(text)
          }
        }}
      />
      <button onClick={() => setFontSize(fontSize + 2)}>+</button>
      <button onClick={() => setFontSize(fontSize - 2)}>-</button>

      <h1
        className={clsx({
          active: isActive
        })}
        style={{
          backgroundColor: text,
          fontSize: fontSize + 'px'
        }}
        onClick={() => setIsActive(!isActive)}>
        {text}
      </h1>
    </>
  )
}
