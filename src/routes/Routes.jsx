import { createBrowserRouter } from 'react-router'
import Root from '../layouts/Root'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

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
      {
        path: '/registerPage',
        element: <RegisterPage />,
      },
    ],
  },
])

export default router
