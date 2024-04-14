import Logo from '../assets/Logo'

export default function Footer() {
  return (
    <footer className='mt-auto border bg-base-200 px-6 py-7 md:px-8 lg:mt-36 lg:px-14'>
      <div className='flex flex-col items-center justify-between gap-5 md:flex-row'>
        <div className='flex gap-3'>
          <span id='logo' className='w-32 min-w-32'>
            <Logo />
          </span>
        </div>
        <div className='flex gap-6 font-light'>
          <span className='cursor-pointer underline hover:underline md:no-underline'>
            Terms of service
          </span>
          <span className='cursor-pointer underline hover:underline md:no-underline'>
            Privacy policy
          </span>
        </div>
      </div>
    </footer>
  )
}
