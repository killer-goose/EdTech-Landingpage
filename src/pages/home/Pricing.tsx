import { Link } from 'react-router-dom'
import CheckIcon from '../../assets/CheckIcon'
import PageHeading from '../../components/PageHeading'

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Student',
      price: 10,
      features: [
        'Curated courses',
        'Interactive materials',
        'Community forums',
      ],
      linkTo: '/',
    },
    {
      name: 'University',
      price: 20,
      features: ['Student features', 'University courses', 'LMS integration'],
      linkTo: '/',
    },
    {
      name: 'Organization',
      price: 30,
      features: [
        'University features',
        'Custom branding',
        'Advanced analytics',
      ],
      linkTo: '/',
    },
  ]

  return (
    <section id='pricing' className='Pricing mb-16 mt-28 scroll-mt-14 lg:mt-44'>
      <PageHeading h1='Pricing' h2='See plans' />
      <p className='mx-auto max-w-3xl text-center font-light text-neutral lg:text-lg'>
        Discover the perfect plan for your needs. Choose from 3 simple pricing
        options
      </p>
      <div className='join mx-auto mt-12 block max-w-max border-2'>
        <button className='btn-neutral-custom join-item'>Monthly</button>
        <button className='btn-ghost-custom join-item'>Annually</button>
      </div>

      <div className='mx-auto mt-16 grid max-w-md auto-rows-fr grid-cols-1 gap-12 lg:max-w-full lg:grid-cols-3'>
        {pricingPlans.map((x, i) => (
          <PricingCard key={i} {...x} month={true} highlighted={i == 1} />
        ))}
      </div>
    </section>
  )
}
type T = {
  name: string
  price: number
  features: string[]
  month: boolean
  linkTo: string
  highlighted?: boolean
}
function PricingCard({
  name,
  price,
  features,
  month = true,
  linkTo,
  highlighted,
}: T) {
  return (
    <div
      className={`smooth-box-shadow flex flex-col overflow-hidden rounded-md ${highlighted && 'border-2 border-neutral lg:scale-[1.1]'}`}
    >
      <div className='flex flex-col items-center justify-center space-y-4 px-2 py-8'>
        <p className='text-lg font-medium text-neutral'>{name}</p>
        <p className='text-5xl font-semibold'>
          {price}€<span className='text-xl'>{month ? '/mo' : '/yr'}</span>
        </p>
      </div>
      <div className='flex flex-col items-center justify-center bg-base-200 px-2 py-8'>
        <ul className='mx-auto my-4 flex w-max flex-1 flex-col gap-4 self-stretch'>
          {features.map((x, i) => (
            <li key={i} className='flex gap-1 '>
              <span>
                <CheckIcon />
              </span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <Link to={linkTo} className='btn-neutral-big-custom !btn-outline mt-8'>
          Get it now
        </Link>
      </div>
    </div>
  )
}
