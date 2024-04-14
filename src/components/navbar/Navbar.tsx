import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo'

export default function Navbar() {
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
        <span id='logo' className='w-36 min-w-36'>
          <Logo />
        </span>
        <div className='hidden justify-between gap-6 sm:flex'>
          {[
            { name: 'Courses', route: '/' },
            { name: 'Instructors', route: '/' },
            { name: 'Pricing', route: '/' },
          ].map(({ name, route }) => (
            <Link
              key={name}
              to={route}
              className='btn btn-ghost btn-sm font-normal tracking-wider'
            >
              {name}
            </Link>
          ))}
        </div>
        <div className='hidden gap-3 sm:flex'>
          <Link to={'/'} className='btn-ghost-custom text-base'>
            Login
          </Link>
          <Link to={'/'} className='btn-neutral-custom text-base'>
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}

function OffCanvas() {
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
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <li key={i}>
                <a>Courses</a>
              </li>
            ))}

          <li className='mt-auto'>
            {' '}
            <Link to={'/'} className='btn btn-outline btn-sm font-normal'>
              Login
            </Link>
          </li>
          <li className='mt-4'>
            <Link to={'/'} className='btn btn-neutral btn-sm font-normal'>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
