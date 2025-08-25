import { redirect } from 'react-router'

export async function requiresAuth({ request }) {
  const token = localStorage.getItem('token')
  if (!token) {
    // 'http://localhost:5173/movies'
    const url = new URL(request.url)
    const redirectTo = encodeURIComponent(url.pathname) // '/movies'
    return redirect(`/signin?redirectTo=${redirectTo}`)
  }
  return true
}

export async function guestOnly() {
  const token = localStorage.getItem('token')
  if (token) {
    return redirect('/')
  }
  return true
}
