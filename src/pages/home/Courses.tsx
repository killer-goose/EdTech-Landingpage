import ArtIcon from '../../assets/badgesSvg/ArtIcon'
import BusinessIcon from '../../assets/badgesSvg/BusinessIcon'
import FinanceIcon from '../../assets/badgesSvg/FinanceIcon'
import MusicIcon from '../../assets/badgesSvg/MusicIcon'
import PlusIcon from '../../assets/badgesSvg/PlusIcon'
import PhotographyIcon from '../../assets/badgesSvg/PhotographyIcon'
import ScienceIcon from '../../assets/badgesSvg/ScienceIcon'
import TechIcon from '../../assets/badgesSvg/TechIcon'
import PageHeading from '../../components/PageHeading'
import StarIcon from '../../assets/StarIcon'

export default function Courses() {
  const categories = [
    { icon: <ArtIcon />, text: 'Art' },
    { icon: <ScienceIcon />, text: 'Science' },
    { icon: <FinanceIcon />, text: 'Finance' },
    { icon: <MusicIcon />, text: 'Music' },
    { icon: <TechIcon />, text: 'Tech' },
    { icon: <BusinessIcon />, text: 'Business' },
    { icon: <PhotographyIcon />, text: 'Photography' },
    { icon: <PlusIcon />, text: 'View all' },
  ]

  const courses = [
    {
      name: 'Prototyping: Beginner to Advanced',
      rating: 4,
      cost: 24,
      description:
        'Explore the fundamentals of prototyping, including wireframing, mockups,and user testing. Seek out help from the community and mentors as you embark on practical projects to solidify your skills.',
      startDate: 'wednesday',
    },
    // {
    //   name: 'Expressive Art: Mastering Digital Illustration',
    //   rating: 4,
    //   cost: 19,
    //   description:
    //     'Unlock your creativity and master the art of digital illustration. Develop skills in composition, color theory, and brush techniques to create captivating artworks.',
    //   startDate: 'Monday',
    // },
    {
      name: 'Data Analytics Fundamentals: A Hands-On Approach',
      rating: 4,
      cost: 29,
      description:
        'Dive into the fundamentals of data analytics with this practical guide. Learn data analysis, visualization, and statistical techniques step-by-step.',
      startDate: 'Thursday',
    },
    {
      name: 'Financial Freedom Blueprint: Secure Your Future',
      rating: 5,
      cost: 39,
      description:
        'Take control of your finances and plan for a secure future. Understand budgeting, investing, and retirement planning strategies to achieve financial freedom.',
      startDate: 'Saturday',
    },
    {
      name: 'Music Production Mastery: From Studio to Stage',
      rating: 5,
      cost: 49,
      description:
        'Unlock the secrets of music production with this comprehensive course. Learn recording techniques, mixing, and mastering to create professional-grade tracks.',
      startDate: 'Sunday',
    },
    {
      name: 'Tech Essentials Bootcamp: Mastering Web Development',
      rating: 4,
      cost: 34,
      description:
        'Kickstart your career in web development with this intensive bootcamp. Master HTML, CSS, JavaScript, and build responsive websites from scratch.',
      startDate: 'Tuesday',
    },
    {
      name: 'Strategic Business Leadership: Growth Insights',
      rating: 5,
      cost: 59,
      description:
        'Gain strategic insights and leadership skills to drive business growth. Learn to analyze markets, develop business plans, and execute strategic initiatives effectively.',
      startDate: 'Friday',
    },
  ]

  return (
    <section className='courses mb-10 mt-24 lg:mt-56'>
      <PageHeading
        h2='Learn anything'
        h1='Choose from a list of 14200 courses'
      />

      <div className='badge-group mx-auto mb-16 flex max-w-max flex-wrap items-center gap-2 lg:gap-3'>
        {categories.map((x, i) => (
          <div
            key={i}
            className='badge badge-lg cursor-pointer border-neutral p-4 hover:badge-neutral'
          >
            <span className='me-1'>{x.icon}</span>
            {x.text}
          </div>
        ))}
      </div>

      <div className='course-container'>
        <h2 className='border-b-2 border-neutral pb-3 text-lg lg:text-xl'>
          Popular Courses
        </h2>
        <div className='course-cards-container mb-12 mt-8 grid gap-8 sm:grid-cols-2 md:my-14 lg:grid-cols-3'>
          {courses.map((x, i) => (
            <CourseCard key={i} {...x} />
          ))}
        </div>

        <p className='mx-auto max-w-max'>
          <button className='btn-neutral-big-custom !btn-outline'>
            See all courses
          </button>
        </p>
      </div>
    </section>
  )
}

type T = {
  name: string
  rating: number
  cost: number
  description: string
  startDate: string
}
function CourseCard({ name, rating, cost, description, startDate }: T) {
  return (
    <article
      className='
    course-card smooth-box-shadow flex flex-col gap-6 rounded-lg border-neutral p-7'
    >
      <div className='card-img-container h-48 rounded-lg bg-gray-500 '></div>
      <div className='course-card-header'>
        <h3 className='mb-2 text-lg text-accent-content lg:text-xl'>
          {' '}
          {name}{' '}
        </h3>
        <p className='flex items-center justify-between'>
          <span className='flex'>
            {Array(rating)
              .fill(0)
              .map((x, i) => (
                <span key={i}>
                  <StarIcon />
                </span>
              ))}
          </span>

          <span>${cost}</span>
        </p>
      </div>
      <div className='course-card-body text-text-gray-400 font-light'>
        {description}
      </div>
      <div className='course-card-footer flex justify-between'>
        <button className='btn-neutral-custom'>Enroll now</button>
        <span className='font-light'>Starts {startDate}</span>
      </div>
    </article>
  )
}
