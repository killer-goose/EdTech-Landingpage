export default function Features() {
  const features = [
    {
      subtitle: 'Smart learning',
      heading: 'Personalized learning paths',
      body: 'Our platform utilizes advanced algorithms to customize curriculum, ensuring it aligns perfectly with your learning style, pace, and objectives.',
    },
    {
      subtitle: 'Comprehensive mentoring',
      heading: 'Expert Guidance and Support',
      body: 'Receive dedicated  mentorship from industry professionals, supplemented by a wealth of  supplementary materials and interactive tools to facilitate your  learning journey.',
    },
    {
      subtitle: 'Stay ahead of the curve',
      heading: 'Cutting-Edge Content',
      body: 'Stay at the forefront of your field with our regularly updated content,  leveraging the latest technologies and methodologies to keep your  learning experience dynamic and relevant.',
    },
  ]
  return (
    <>
      <section className='infinite-brand-slider mx-auto my-28 max-w-max'>
        <h1 className='mx-auto mb-8 w-max text-lg text-text-gray md:text-xl lg:text-2xl'>
          Organizations that trust our services
        </h1>
        <img src='./../../../src/assets/brands.png' alt='brands' />
      </section>
      <section className='mt-24 lg:mt-52'>
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
}: {
  subtitle: string
  heading: string
  body: string
  order?: boolean
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
        className={`feature-card-img hidden rounded-lg bg-gray-500 lg:block ${order ? 'order-1' : ''}`}
      ></div>
    </article>
  )
}
