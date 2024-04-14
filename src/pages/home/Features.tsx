import Content from '../../assets/illustrations/Content'
import ExpertHelp from '../../assets/illustrations/ExpertHelp'
import Personalized from '../../assets/illustrations/Personalized'
import PageHeading from '../../components/PageHeading'
import Marquee from 'react-fast-marquee'
import logo1 from './../../assets/brands/logo1.svg'
import logo2 from './../../assets/brands/logo2.svg'
import logo3 from './../../assets/brands/logo3.svg'
import logo4 from './../../assets/brands/logo4.svg'
import logo5 from './../../assets/brands/logo5.svg'
import logo6 from './../../assets/brands/logo6.svg'
import logo7 from './../../assets/brands/logo7.svg'
import logo8 from './../../assets/brands/logo8.svg'
export default function Features() {
  const features = [
    {
      subtitle: 'Smart learning',
      heading: 'Personalized learning paths',
      body: 'Our platform utilizes advanced algorithms to customize curriculum, ensuring it aligns perfectly with your learning style, pace, and objectives.',
      img: <Personalized />,
    },
    {
      subtitle: 'Comprehensive mentoring',
      heading: 'Expert Guidance and Support',
      body: 'Receive dedicated  mentorship from industry professionals, supplemented by a wealth of  supplementary materials and interactive tools to facilitate your  learning journey.',
      img: <ExpertHelp />,
    },
    {
      subtitle: 'Stay ahead of the curve',
      heading: 'Cutting-Edge Content',
      body: 'Stay at the forefront of your field with our regularly updated content,  leveraging the latest technologies and methodologies to keep your  learning experience dynamic and relevant.',
      img: <Content />,
    },
  ]

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]
  return (
    <>
      <section className='infinite-brand-slider mx-auto mb-16 mt-24 max-w-max lg:mb-36'>
        <h2 className='text-light mx-auto mb-3 max-w-max text-text-gray lg:mb-6 lg:text-lg lg:font-semibold'>
          Trusted at
        </h2>
        <Marquee>
          {logos.map((x, i) => (
            <img key={i} src={x} alt='brand-image' className='mx-8 h-28 w-28' />
          ))}
        </Marquee>
      </section>
      <PageHeading h1='Why choose us' h2='Make the right choice' />
      <section className='mt-8'>
        {features.map((x, i) => {
          const order = i == 1
          return <FeatureCard {...x} key={i} order={order} />
        })}
      </section>
    </>
  )
}

// function H1() {
//   return (

//   )
// }

function FeatureCard({
  subtitle,
  heading,
  body,
  order,
  img,
}: {
  subtitle: string
  heading: string
  body: string
  order?: boolean
  img: JSX.Element
}) {
  return (
    <article className='feature-card my-12 grid-cols-2 gap-2 lg:my-20 lg:grid lg:gap-32'>
      <div
        className={`feature-card-text flex flex-col gap-5 lg:py-14 ${order ? 'order-2' : ''}`}
      >
        <div>
          <h3 className='mb-2 font-light text-text-gray'>{subtitle}</h3>
          <h2 className='text-2xl lg:text-3xl'>{heading}</h2>
        </div>
        <p className='font-light text-neutral lg:text-lg'>{body}</p>
      </div>
      <div
        className={`feature-card-img hidden max-w-[400px] rounded-lg lg:block ${order ? 'order-1' : ''}`}
      >
        {img}
      </div>
    </article>
  )
}
