import { app } from './firebaseApp'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const auth = getAuth(app)
// connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })

export const signUpFn = async (email: string, password: string) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password)
  } catch (error: any) {
    console.log(error)
    return Promise.reject(error.code)
  }
}
export const signOutFn = async () => {
  try {
    await signOut(auth)
  } catch (error: any) {
    console.log(error)
    return Promise.reject(error.code)
  }
}
export const signInFn = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error: any) {
    console.log(error)
    return Promise.reject(error.code)
  }
}
