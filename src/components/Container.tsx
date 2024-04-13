import { Outlet } from 'react-router-dom'
export default function Container() {
  return (
    <div className='container-custom mx-auto max-w-7xl px-6 md:px-8 lg:px-12'>
      <Outlet />
    </div>
  )
}
