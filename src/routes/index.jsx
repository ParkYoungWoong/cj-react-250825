import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Default.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SignIn from './pages/SignIn.jsx'
import Movies from './pages/Movies.jsx'

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
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
        element: <SignIn />
      },
      {
        path: '/movies',
        element: <Movies />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
