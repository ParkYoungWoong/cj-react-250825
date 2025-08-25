import { useState } from 'react'
import TextField from '@/components/TextField.jsx'
import Button from '@/components/Button.jsx'
import { useNavigate, useSearchParams } from 'react-router'

export default function App() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    console.log(id, pw)
    // 로그인 성공!
    if (id && pw) {
      const token = id + pw
      localStorage.setItem('token', token)
      // http://localhost:5173/signin?redirectTo=%2Fmovies
      const redirectTo = searchParams.get('redirectTo') // '/movies'
      navigate(redirectTo || '/')
    }
  }

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}>
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
