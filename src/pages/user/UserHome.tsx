import { useEffect } from 'react'
import useGlobalStore from '../../state/GlobalState'
import { useNavigate } from 'react-router-dom'

export default function UserHome() {
  const user = useGlobalStore((state) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (user == null) navigate('/')
  }, [user, navigate])
  return (
    <div className='user-home mb-auto mt-28 min-h-[60vh] max-w-md md:min-h-[calc(100vh-400px)]'>
      <h1 className='text-text-gray-200 font-light'>(Signed in as)</h1>
      <h1 className='border-b-2 border-neutral pb-3 text-3xl lg:text-5xl'>
        {user?.name}
      </h1>
      <div className='mt-4 flex flex-col gap-6 text-xl'>
        <div>
          <span className='block font-semibold'>Email: </span>
          {user?.email}
        </div>
        <div>
          <span className='block font-semibold'>Courses Purchased: </span>

          {/* {user?.coursesPurchased.map((x,i)=>(<li key={i}>{x}</li>))} */}
          {user != null && user?.coursesPurchased[0] == 'null' ? (
            <span>No courses purchased</span>
          ) : (
            user != null && (
              <ol className='list-decimal ps-4'>
                {user.coursesPurchased?.map((x, i) => <li key={i}>{x}</li>)}
              </ol>
            )
          )}
        </div>
      </div>
    </div>
  )
}
