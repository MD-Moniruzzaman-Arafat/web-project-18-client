import { createBrowserRouter } from 'react-router'
import Root from '../layouts/Root'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/loginPage',
        element: <LoginPage />,
      },
    ],
  },
])

export default router
