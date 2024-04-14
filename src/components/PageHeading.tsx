export default function PageHeading({ h2, h1 }: { h2: string; h1: string }) {
  return (
    <div className='page-heading-group mx-auto mb-8 max-w-max text-center'>
      <h2 className='text-text-gray font-light lg:text-lg'>{h2}</h2>
      <h1 className='text-3xl font-semibold md:text-3xl lg:text-4xl'>{h1}</h1>
    </div>
  )
}
