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

export default function Hero() {
  return (
    <section role="banner" className="bg-white">
    <div className="mx-auto sm:grid sm:gap-4 lg:grid-cols-3 max-w-screen-2xl lg:h-screen">
      <div className="relative flex items-end px-4 pt-64 pb-4 lg:col-span-2 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12">
        <img
          src="https://www.hyperui.dev/code/photos/team-1.jpeg"
          alt="Office workers high fiving"
          className="absolute inset-0 object-cover w-full h-full"
        />
  
        <div className="relative max-w-lg p-8 bg-white">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
  
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nisi consequuntur tenetur voluptatibus id
            rerum ipsa ducimus ea. Consectetur, ut quae! Odit sed labore delectus numquam eaque impedit amet alias.
          </p>
        </div>
      </div>
  
      <div className="hidden sm:gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-1">
        <div className="sm:relative sm:h-64 lg:h-full">
          <img
            src="https://www.hyperui.dev/code/photos/team-2.jpeg"
            alt="Office workers in a meeting"
            className="sm:absolute sm:inset-0 sm:object-cover sm:w-full sm:h-full"
          />
        </div>
  
        <div className="sm:relative sm:h-64 lg:h-full">
          <img
            src="https://www.hyperui.dev/code/photos/team-3.jpeg"
            alt="Programmers working"
            className="sm:absolute sm:inset-0 sm:object-cover sm:w-full sm:h-full"
          />
        </div>
      </div>
    </div>
  </section>
  
  )
}
