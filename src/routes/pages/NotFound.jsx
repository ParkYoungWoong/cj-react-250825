import { Link } from 'react-router'

export default function NotFound() {
  return (
    <>
      <h1>404 페이지를 찾을 수 없지요~😘</h1>
      <Link to="/">홈으로 가기!</Link>
    </>
  )
}
