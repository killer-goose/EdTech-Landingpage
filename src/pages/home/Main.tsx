export default function Main() {
  return (
    //  min-h-[calc(100vh-5rem-24px-32px)]
    <main className='mb-10 mt-14 grid grid-rows-2 gap-16 lg:mt-20 lg:grid-cols-2 lg:grid-rows-1 lg:gap-32 lg:py-32'>
      <section className='hero-text order-2 flex flex-col gap-6 sm:mx-auto sm:max-w-md sm:text-center lg:order-1 lg:mx-[unset] lg:max-w-[unset] lg:gap-10 lg:text-left'>
        <div>
          <h1 className='text-3xl lg:text-5xl'>Sharpen your skills</h1>
          <h1 className='text-3xl lg:text-5xl'>Shape your future</h1>
        </div>
        <p className='text-lg font-light text-neutral sm:!leading-9 lg:text-2xl'>
          Empowering learners with tools and resources to forge their own paths
          to excellence.
        </p>
        <div className='mt-8 flex gap-4 sm:mx-auto lg:mx-[unset] lg:mt-12'>
          <button className='btn btn-ghost btn-sm font-normal lg:btn-md lg:text-base'>
            Find courses
          </button>
          <button className='btn-neutral-big-custom'>
            Join for free
            {/* arrow right */}
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
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              />
            </svg>
          </button>
        </div>
      </section>
      <section className='hero-img h-full w-full max-w-md rounded-lg bg-gray-500 sm:mx-auto sm:text-center lg:order-2 lg:mx-[unset] lg:max-w-[unset] lg:text-left'></section>
    </main>
  )
}
