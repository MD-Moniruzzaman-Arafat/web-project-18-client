import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { AuthContext } from '.'
import auth from '../firebase/firebaseConfig'

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [isRegistered, setIsRegistered] = useState(false)

  const googleProvider = new GoogleAuthProvider()

  // Create a new user
  async function createUser(email, password, displayName, photoURL) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user
    await updateProfile(user, {
      displayName: displayName,
      photoURL: photoURL,
    })
    return user
  }

  // Sign in an existing user
  async function signInUser(email, password) {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  }

  // update user profile
  async function updateUserProfile(currentUser, displayName, photoURL) {
    // if (!currentUser) return

    return updateProfile(currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
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
      if (user && !isRegistered) {
        // User is signed in
        setCurrentUser(user)
        console.log(currentUser)
      } else {
        // User is signed out
        setCurrentUser(null)
      }
    })

    return () => unsubscribe()
  }, [isRegistered])

  return (
    <>
      <AuthContext.Provider
        value={{
          createUser,
          signInUser,
          signInWithGoogle,
          signOutUser,
          currentUser,
          setIsRegistered,
          updateUserProfile,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}
