import { Outlet } from 'react-router-dom'
export default function Container() {
  return (
    <div className='container-custom mb-4 overflow-hidden px-6'>
      <div className='relative mt-[--navbar-height-mob] xs:mt-[--navbar-height] md:ms-[--sidebar-width]'>
        <span className='absolute right-2 top-2 text-xs'>CONTAINER</span>
        <Outlet />
      </div>
    </div>
  )
}
