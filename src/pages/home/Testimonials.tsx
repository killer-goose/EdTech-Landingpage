import StarIcon from '../../assets/StarIcon'
import PageHeading from '../../components/PageHeading'

export default function Testimonials() {
  // const testimonials = [
  //   {
  //     name: 'Maya heeves',
  //     designation: 'Student at UCB',
  //     courseTaken: 'Prototyping for beginners',
  //     review:
  //       ' Incredible course! Clear explanations, practical projects. Perfect for beginners diving into prototyping',
  //     rating: 4,
  //   },
  // ]
  const testimonials = [
    {
      name: 'John Smith',
      designation: 'Software Engineer',
      courseTaken: 'Web Development Bootcamp',
      review:
        'Would definitely recommend it to anyone looking to get into web development.',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      designation: 'Graphic Designer',
      courseTaken: 'UI/UX Design Fundamentals',
      review:
        'Awesome course! The instructors were knowledgeable and the content was easy to follow. It really helped me improve my design skills.',
      rating: 4,
    },
    {
      name: 'Michael Brown',
      designation: 'Entrepreneur',
      courseTaken: 'Business Strategy Masterclass',
      review:
        'Exceptional content! The course provided valuable insights and practical strategies. I feel more confident in scaling my business after completing it.',
      rating: 5,
    },
    {
      name: 'Anna Chen',
      designation: 'Student at NYU',
      courseTaken: 'Data Science Essentials',
      review:
        'Highly recommend this course! It covers a wide range of topics and the instructors are excellent. The hands-on exercises were especially helpful.',
      rating: 4,
    },
    {
      name: 'David Lee',
      designation: 'Marketing Manager',
      courseTaken: 'Digital Marketing Fundamentals',
      review:
        'Outstanding course! I gained valuable knowledge and practical skills that I could immediately apply to my work. Worth every penny!',
      rating: 5,
    },
  ]

  return (
    <section className='testimonials mt-28 lg:mt-56'>
      <PageHeading h1='Testimonials' h2='Student voices' />
      <p className='mx-auto max-w-3xl text-center font-light text-neutral lg:text-lg'>
        Don’t just take our word for it. Hear from our students from all walks
        of life as they share the impact of our courses in their educational
        journey
      </p>

      <div className='testimonial-cards-container mt-16 grid grid-cols-2 gap-10'>
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
}
function TestimonialCard({
  name,
  designation,
  courseTaken,
  review,
  rating,
}: T) {
  return (
    <article className='testimonial-card smooth-box-shadow relative flex gap-6 rounded-md p-6'>
      <div className='image'>
        <div className='image-container aspect-square h-36 rounded-full bg-gray-500'></div>
        <div className='image-caption'>
          <h2 className='mx-auto max-w-max text-accent-content'>{name}</h2>
          <h4 className='text-center text-xs text-neutral'>{designation}</h4>
        </div>
      </div>
      <div className='body mt-2 flex flex-col gap-2'>
        <span className='flex'>
          {Array(4)
            .fill(rating)
            .map((_, i) => (
              <span key={i}>
                <StarIcon />
              </span>
            ))}
        </span>

        <h3 className='text-lg'>{courseTaken}</h3>
        <p className='text-text-gray-400 font-light'>{review}</p>
      </div>
    </article>
  )
}
