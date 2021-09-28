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

export default function HeroGradientText() {
  return (
    <section className="text-white bg-gray-900" role="banner">
    <div className="px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36 lg:h-screen lg:flex lg:items-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        >
         Problems We Solve
        </h1>
  
        <p className="max-w-xl mx-auto mt-6 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique necessitatibus dolorem soluta,
          recusandaefacere error.
        </p>
  
        <div className="mt-8 sm:justify-center sm:flex">
          <a href="" className="block px-5 py-3 font-medium bg-purple-600 rounded-lg hover:bg-purple-500">
            Get started today
          </a>
  
          <a
            href=""
            className="block px-5 py-3 mt-3 font-medium border border-purple-600 rounded-lg sm:ml-3 sm:mt-0 hover:border-purple-500"
          >
            Find out more
          </a>
        </div>
      </div>
    </div>
  </section>
  
  
  )
}
