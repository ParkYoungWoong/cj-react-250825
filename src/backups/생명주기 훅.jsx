import { useRef, useEffect } from 'react'

export default function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    return () => {
      console.log('사망하셨습니다..')
    }
  }, [])

  // 태어남 => 유치원 => 초등 => 중 => 대 => 취업 => 결혼 => 출산 => 사망
  // 선언 => 연결(실행) => 반환 => 렌더링 => 렌더링 직후 => 연결 해제

  return (
    <>
      <input
        type="text"
        ref={inputRef}
      />
      {/* <button onClick={() => inputRef.current.focus()}>포커스!</button> */}
    </>
  )
}
