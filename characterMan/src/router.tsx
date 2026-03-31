import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Login from './views/Login'
import Home from './views/Home'
import CharacterCreate from './views/CharacterCreate'
import CharacterPlay from './views/CharacterPlay'
import Characters from './views/Characters'
import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/home',
            element: <Home />,
          },
          {
            path: '/characters',
            element: <Characters />,
          },
          {
            path: '/characters/create',
            element: <CharacterCreate />,
          },
          {
            path: '/characters/:id/play',
            element: <CharacterPlay />,
          },
        ]
      }
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
