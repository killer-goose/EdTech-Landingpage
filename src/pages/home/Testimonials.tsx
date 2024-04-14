import StarIcon from '../../assets/StarIcon'
import PageHeading from '../../components/PageHeading'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      designation: 'Software Engineer',
      courseTaken: 'Web Development Bootcamp',
      review: 'Great bootcamp! Very informative. ',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      designation: 'Graphic Designer',
      courseTaken: 'UI/UX Design Fundamentals',
      review:
        "Awesome course! I found the instructors to be highly knowledgeable and approachable. The content was presented in a clear and concise manner, making it easy to follow. This course has significantly enhanced my design skills, providing me with valuable insights and practical techniques. I'm truly grateful for the enriching learning experience it has offered me.",
      rating: 4,
    },
    {
      name: 'Michael Brown',
      designation: 'Entrepreneur',
      courseTaken: 'Business Strategy Masterclass',
      review:
        'Exceptional content! The course provided valuable insights and practical strategies. I feel more confident in scaling my business after completing it.',
      rating: 5,
      classVars: 'md:-mt-[7.5rem]',
    },
    {
      name: 'Anna Chen',
      designation: 'Student at NYU',
      courseTaken: 'Data Science Essentials',
      review:
        'Highly recommend this course! It covers a wide range of topics and the instructors are excellent. The hands-on exercises were especially helpful for understanding complex concepts.',
      rating: 4,
    },
    {
      name: 'David Lee',
      designation: 'Marketing Manager',
      courseTaken: 'Digital Marketing Fundamentals',
      review:
        'Outstanding course! I gained valuable knowledge and practical skills that I could immediately apply to my work. Worth every penny!',
      rating: 5,
      classVars: 'md:-mt-[7.5rem]',
    },
  ]
  return (
    <section className='testimonials mt-28 lg:mt-48'>
      <PageHeading h1='Testimonials' h2='Student voices' />
      <p className='mx-auto max-w-3xl text-center font-light text-neutral lg:text-lg'>
        Don’t just take our word for it. Hear from our students from all walks
        of life as they share the impact of our courses in their educational
        journey
      </p>

      <div className='testimonial-cards-container mt-16 grid grid-rows-1 items-start gap-x-12 gap-y-10 md:grid-cols-2 md:grid-rows-[unset]'>
        {testimonials.map((x, i) => (
          <TestimonialCard key={i} {...x} />
        ))}
      </div>
    </section>
  )
}
type T = {
  name: string
  designation: string
  courseTaken: string
  review: string
  rating: number
  classVars?: string
}
function TestimonialCard({
  name,
  designation,
  courseTaken,
  review,
  rating,
  classVars = '',
}: T) {
  return (
    <article
      className={`testimonial-card smooth-box-shadow relative flex flex-col gap-3 rounded-md px-8 py-10 ${classVars}`}
    >
      <div className='image flex gap-3'>
        <div className='image-container aspect-square h-10 rounded-full bg-neutral'></div>
        <div className='image-caption'>
          <h2 className='text-accent-content'>{name}</h2>
          <h4 className='text-xs text-neutral'>{designation}</h4>
        </div>
        <div className='ms-auto flex'>
          {Array(4)
            .fill(rating)
            .map((_, i) => (
              <span key={i}>
                <StarIcon />
              </span>
            ))}
        </div>
      </div>
      <div className='body mt-2 flex flex-col gap-2'>
        <h3 className='text-lg'>{courseTaken}</h3>
        <p className='text-text-gray-400 font-light'>{review}</p>
      </div>
    </article>
  )
}
