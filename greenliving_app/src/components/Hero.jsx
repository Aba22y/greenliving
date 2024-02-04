import React from 'react'

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
          Sign Up
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Explore <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
    
  )
}

export default Hero