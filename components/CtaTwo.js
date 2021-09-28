/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroFull() {
  return (
    <>
   <aside className="p-12 bg-gray-900 rounded-xl sm:p-16 lg:p-24">
  <div className="max-w-xl mx-auto text-center">
    <p className="text-sm font-medium text-gray-300">
      Don't let big companies own your data
    </p>

    <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
      Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
    </p>

    <form className="mt-8 sm:flex">
      <div className="sm:flex-1">
        <label htmlFor="email" className="sr-only">Email</label>

        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-between w-full px-5 py-3 mt-4 font-medium text-white bg-blue-600 rounded-lg sm:w-auto sm:mt-0 sm:ml-4 hover:bg-blue-500"
      >
        Sign up

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="flex-shrink-0 w-4 h-4 ml-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  </div>
</aside>

  
  </>
  
  )
}
