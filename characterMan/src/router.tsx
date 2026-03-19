import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Login from './views/Login'
import Home from './views/Home'
import CharacterCreate from './views/CharacterCreate'
import CharacterPlay from './views/CharacterPlay'
import Characters from './views/Characters'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
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
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
