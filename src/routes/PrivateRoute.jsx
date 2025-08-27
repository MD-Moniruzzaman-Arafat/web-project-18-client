import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../context'

export default function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext)
  const location = useLocation()
  return (
    <>
      {currentUser ? (
        children
      ) : (
        <Navigate to="/loginPage" state={location.pathname} />
      )}
    </>
  )
}
