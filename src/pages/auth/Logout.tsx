import { signOutFn } from '../../firebase/firebaseAuth'
import useGlobalStore from '../../state/GlobalState'
import loadingSpinner from '../../../src/assets/830.svg'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const setUser = useGlobalStore((state) => state.setUser)
  const navigate = useNavigate()
  signOutFn().then(() => {
    setTimeout(() => {
      // reset state
      setUser(null)

      localStorage.clear()
      sessionStorage.clear()
      navigate('/')
    }, 500)
  })
  return (
    // additional 1vh height to prevent scrollbar jump layout shift
    <div className='absolute inset-0 grid min-h-[101vh] place-content-center gap-8 bg-gray-100'>
      <img src={loadingSpinner} alt='loading spinner' className='mx-auto' />
      <h3 className='text-2xl font-semibold'>Logging out</h3>
    </div>
  )
}
