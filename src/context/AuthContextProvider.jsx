import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { AuthContext } from '.'
import auth from '../firebase/firebaseConfig'

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const googleProvider = new GoogleAuthProvider()

  // Create a new user
  async function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Sign in an existing user
  async function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Sign in with Google
  async function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider)
  }

  // Sign out the current user
  async function signOutUser() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user)
      } else {
        // User is signed out
        setCurrentUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <>
      <AuthContext.Provider
        value={{
          createUser,
          signInUser,
          signInWithGoogle,
          signOutUser,
          currentUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}
