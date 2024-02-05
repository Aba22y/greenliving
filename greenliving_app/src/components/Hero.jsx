import React from 'react'
import { CalendarDaysIcon, GlobeAsiaAustraliaIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import collage from '../assets/collage.png'

const features = [
  {
    name: 'Gardening advice',
    description:
      'Learn and share handy information with plant lovers from all levels of expertise.',
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: 'Events',
    description: 'Interact and participate in events with a diverse range of people with similar interests.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Create',
    description: 'Develop content for your followers and grow your own sub community.',
    icon: UserCircleIcon,
  },
]

const Hero = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
        A Green Community For Learning And Growing
      </h1>
      <p className="mt-6 text-lg leading-8 text-secondaryLight">
        Sign up today to make new friends, learn new skills, and make the world greener one leaf at a time.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
        href="#"
        className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondaryLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link to="/create-account">Sign Up</Link>
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Explore <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 my-14 flex items-center">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Cultivating a community</p>
              <p className="mt-6 text-lg leading-8 text-gray-900">
                
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-900 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-secondary">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-secondaryLight" aria-hidden="true" />
                      {feature.name + ':'}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={collage}
            alt="Post Collage"
            className="w-[27rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    
  )
}

export default Hero