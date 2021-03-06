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
    <section className="bg-blue-50">
    <div className="px-4 py-16 mx-auto max-w-screen-xl space-y-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-8 lg:items-start">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
  
          <p className="mt-6 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione sed cumque molestiae dolores eaque
            odit corporis accusamus reprehenderit laborum?
          </p>
        </div>
  
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
          <a className="block p-8 border-2 border-white lg:pr-16 bg-gradient-to-b from-white to-blue-50" href="">
            <span className="inline-block p-2 bg-blue-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </span>
  
            <h3 className="mt-4 text-xl font-bold text-blue-900">Lorem, ipsum dolor.</h3>
  
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus.
            </p>
          </a>
  
          <a className="block p-8 border-2 border-white lg:pr-16 bg-gradient-to-b from-white to-blue-50" href="">
            <span className="inline-block p-2 bg-blue-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </span>
  
            <h3 className="mt-4 text-xl font-bold text-blue-900">Lorem, ipsum dolor.</h3>
  
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus.
            </p>
          </a>
  
          <a className="block p-8 border-2 border-white lg:pr-16 bg-gradient-to-b from-white to-blue-50" href="">
            <span className="inline-block p-2 bg-blue-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </span>
  
            <h3 className="mt-4 text-xl font-bold text-blue-900">Lorem, ipsum dolor.</h3>
  
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus.
            </p>
          </a>
  
          <a className="block p-8 border-2 border-white lg:pr-16 bg-gradient-to-b from-white to-blue-50" href="">
            <span className="inline-block p-2 bg-blue-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </span>
  
            <h3 className="mt-4 text-xl font-bold text-blue-900">Lorem, ipsum dolor.</h3>
  
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, temporibus.
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
  
  
  )
}
