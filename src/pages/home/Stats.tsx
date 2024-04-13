import Batches from '../../assets/Batches'
import GraduationCap from '../../assets/GraduationCap'
import Users from '../../assets/Users'

export default function Stats() {
  return (
    <section className='stats mx-auto my-28 flex max-w-4xl justify-between gap-8 overflow-auto lg:my-44'>
      {/* cards */}
      <div className='stat-card flex items-center gap-3'>
        <span className='icon inline-block rounded-md bg-neutral p-1.5 text-base-200 sm:p-2.5'>
          <Users />
        </span>
        <div>
          <h2 className='text-xl lg:text-3xl'>300+</h2>
          <h3>Verified&nbsp;mentors</h3>
        </div>
      </div>

      <div className='stat-card flex items-center gap-3'>
        <span className='icon inline-block rounded-md bg-neutral p-1.5 text-base-200 sm:p-2.5'>
          <Batches />
        </span>
        <div>
          <h2 className='text-xl lg:text-3xl'>1000+</h2>
          <h3>Running&nbsp;batches</h3>
        </div>
      </div>

      <div className='stat-card flex items-center gap-3'>
        <span className='icon inline-block rounded-md bg-neutral p-1.5 text-base-200 sm:p-2.5'>
          <GraduationCap />
        </span>
        <div>
          <h2 className='text-xl lg:text-3xl'>30000+</h2>
          <h3>Students&nbsp;enrolled</h3>
        </div>
      </div>
    </section>
  )
}
