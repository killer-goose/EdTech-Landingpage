import StarIcon from '../../assets/StarIcon'
import PageHeading from '../../components/PageHeading'

export default function Instructors() {
  const instructors = [
    {
      name: 'Angela Yu',
      rating: 5,
      description:
        'Teaches web and ios app development. Loved and regarded by students worldwide',
    },
    {
      name: 'Michelle Garcia',
      rating: 5,
      description:
        'Blends musical passion with entrepreneurial spirit to inspire new ventures in the industry',
    },
    {
      name: 'Daniel Lee',
      rating: 4,
      description:
        'Fuses creativity and strategic thinking to drive innovative business solutions',
    },
  ]
  return (
    <section id='instructors' className='instructors scroll-mt-16'>
      <PageHeading
        h1='Get to know our instructors'
        h2='Devoted Mentors, Illuminating Way'
      />
      <p className='mx-auto max-w-3xl text-center font-light text-neutral lg:text-lg'>
        Discover the talented individuals behind our educational excellence,
        dedicated to providing personalized guidance and expertise to empower
        your learning experience.
      </p>

      <div className='instructor-cards my-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {instructors.map((x, i) => (
          <InstructorCard key={i} {...x} />
        ))}
      </div>
      <p className='mx-auto max-w-max'>
        <button className='btn-neutral-big-custom !btn-outline'>
          Find all instructors
        </button>
      </p>
    </section>
  )
}

type T = {
  name: string
  rating: number
  description: string
}
function InstructorCard({ name, rating, description }: T) {
  return (
    <article
      className='
    instructor-card smooth-box-shadow flex flex-col gap-6 rounded-lg border-neutral p-7'
    >
      <div className='card-img-container h-48 rounded-lg bg-gray-500 '></div>
      <div className='instructor-card-header'>
        <h3 className='mx-auto mb-2 max-w-max text-lg text-accent-content lg:text-xl'>
          {name}
        </h3>
        <p className='mx-auto max-w-max'>
          <span className='flex'>
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <span key={i}>
                  <StarIcon />
                </span>
              ))}
          </span>
        </p>
      </div>
      <div className='instructor-card-body text-text-gray-400 font-light'>
        {description}
      </div>
      <div className='instructor-card-footer mx-auto max-w-max'>
        <button className='btn-neutral-custom'>See courses</button>
      </div>
    </article>
  )
}
