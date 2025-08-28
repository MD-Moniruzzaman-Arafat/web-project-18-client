import { createBrowserRouter } from 'react-router'
import { allTouristSpots } from '../api'
import Root from '../layouts/Root'
import AddTouristsSpotPage from '../pages/AddTouristsSpotPage'
import AllTouristsSpotPage from '../pages/AllTouristsSpotPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MyListPage from '../pages/MyListPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute'

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
      {
        path: '/addTouristsSpotPage',
        element: (
          <PrivateRoute>
            <AddTouristsSpotPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/allTouristsSpotPage',
        element: (
          <PrivateRoute>
            <AllTouristsSpotPage />
          </PrivateRoute>
        ),
        loader: allTouristSpots,
      },
      {
        path: '/myListPage',
        element: (
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
