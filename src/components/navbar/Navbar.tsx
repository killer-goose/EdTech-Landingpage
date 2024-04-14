import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo'
import useGlobalStore from '../../state/GlobalState'

const navLinks = [
  { name: 'Courses', route: '#courses' },
  { name: 'Instructors', route: '#instructors' },
  { name: 'Pricing', route: '#pricing' },
]

export default function Navbar() {
  const setloginModalOpen = useGlobalStore((state) => state.setloginModalOpen)
  const user = useGlobalStore((state) => state.user)

  return (
    // use container margins throughout, at lg, use your own rules
    <nav className='relative mt-6 max-w-[1920px] px-6 md:px-8 lg:px-12'>
      <OffCanvas />
      {/* hamburger */}
      <label
        htmlFor='my-drawer-4'
        className='btn drawer-button btn-sm absolute right-4 top-0 sm:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </label>
      <div className='nav-content-wrapper flex justify-between text-base'>
        <Link to={'/'} id='logo' className='w-36 min-w-36'>
          <Logo />
        </Link>
        <div className='hidden justify-between gap-6 sm:flex'>
          {navLinks.map(({ name, route }) => (
            <a
              key={name}
              href={route}
              className='btn btn-ghost btn-sm font-medium tracking-wider'
            >
              {name}
            </a>
          ))}
        </div>
        {user != null ? (
          <div className='dropdown dropdown-end hidden sm:block'>
            <button className='btn btn-sm'>
              {user.name}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.8}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className='menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
            >
              <li>
                <Link to={'/user'}>Profile</Link>
              </li>
              <li>
                <Link to={'/logout'}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className='hidden gap-3 sm:flex'>
            <button
              onClick={() => {
                setloginModalOpen(true)
              }}
              className='btn-ghost-custom text-base'
            >
              Login
            </button>
            <button
              onClick={() => {
                setloginModalOpen(true)
              }}
              className='btn-neutral-custom text-base'
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

function OffCanvas() {
  const setloginModalOpen = useGlobalStore((state) => state.setloginModalOpen)
  const user = useGlobalStore((state) => state.user)
  const handleClose = () => {
    const checkBoxToggle: any =
      document.getElementsByClassName('drawer-toggle')[0]
    checkBoxToggle.checked = false
  }
  return (
    <div className='drawer drawer-end relative z-10'>
      {/* close button */}

      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>{/* Page content here */}</div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-4'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu relative min-h-full w-72 bg-base-200 p-4 pt-14 text-base-content'>
          <span
            className='close-btn btn btn-sm absolute right-2 top-4 z-10 cursor-pointer rounded-full px-1 sm:hidden'
            onClick={handleClose}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </span>

          {/* Sidebar content here */}
          {navLinks.map((x, i) => (
            <li key={i}>
              <a href={x.route}>{x.name}</a>
            </li>
          ))}

          {user != null ? (
            <>
              <li className='mt-auto'>
                <span className='pointer-events-none cursor-none bg-base-300 font-medium'>
                  Signed in as {user.name}
                </span>
              </li>
              <li>
                <Link to={'/user'}>Profile</Link>
              </li>
              <li>
                <Link to={'/logout'}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              {' '}
              <li className='mt-auto'>
                {' '}
                <button
                  onClick={() => {
                    setloginModalOpen(true)
                  }}
                  className='btn btn-outline btn-sm font-normal'
                >
                  Login
                </button>
              </li>
              <li className='mt-4'>
                <button
                  onClick={() => {
                    setloginModalOpen(true)
                  }}
                  className='btn btn-neutral btn-sm font-normal'
                >
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
