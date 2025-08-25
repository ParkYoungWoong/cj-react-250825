import { useState } from 'react'
import TextField from '@/components/TextField.jsx'
import Button from '@/components/Button.jsx'

export default function App() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    console.log(id, pw)
    // 유효성 검사
    // 서버로 보내는 로직
  }

  return (
    <>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}>
        <TextField
          label="아이디"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <TextField
          label="비밀번호"
          type="password"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        {/* <button type="submit">로그인</button> */}
        <Button
          type="submit"
          loading={isLoading}>
          로그인
        </Button>
      </form>
    </>
  )
}
