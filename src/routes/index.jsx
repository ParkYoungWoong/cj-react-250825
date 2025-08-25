import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/', // http://localhost:5173/
    element: <Home />
  },
  {
    path: '/about', // http://localhost:5173/about
    element: <About />
  },
  {
    path: '/signin', // http://localhost:5173/signin
    element: <h1>SignIn Page!</h1>
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
