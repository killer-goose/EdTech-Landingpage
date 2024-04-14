import { signOutFn } from '../../firebase/firebaseAuth'
import useGlobalStore from '../../state/GlobalState'

export default function Logout() {
  const setUser = useGlobalStore((state) => state.setUser)
  signOutFn().then(() => {
    setTimeout(() => {
      // reset state
      setUser(null)

      localStorage.clear()
      sessionStorage.clear()
    }, 500)
  })
  return (
    // additional 1vh height to prevent scrollbar jump layout shift
    <div className='absolute inset-0 grid min-h-[101vh] place-content-center gap-8 bg-gray-100'>
      <img src='/assets/830.svg' alt='loading spinner' className='mx-auto' />
      <h3 className='text-2xl font-semibold'>Logging out</h3>
    </div>
  )
}
