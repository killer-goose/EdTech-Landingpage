import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    // use container margins throughout, at lg, use your own rules
    <nav className='max-w-[1080px] lg:px-4'>
      <div className='nav-content-wrapper flex justify-between '>
        <h1>Logo</h1>
        <div className='flex justify-between gap-4'>
          <a href='#'>Courses</a>
          <a href='#'>Instructors</a>
          <a href='#'>Pricing</a>
        </div>
        <div className='flex gap-3'>
          <Link to={'/'}>Login</Link>
          <Link to={'/'} className='btn-custom-capsule'>
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}
