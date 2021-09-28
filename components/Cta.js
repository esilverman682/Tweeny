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
    <aside className="p-12 bg-gray-100 rounded-xl sm:p-16 lg:p-24">
    <div className="max-w-xl mx-auto text-center">
      <p className="text-sm font-medium text-gray-500">
        Lorem ipsum dolor sit amet.
      </p>
  
      <p className="mt-2 text-3xl font-bold sm:text-5xl">
        Lorem ipsum dolor sit amet consectetur.
      </p>
  
      <div className="mt-8 sm:items-center sm:justify-center sm:flex">
        <a href="" className="block px-5 py-3 font-medium text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600">
          Start free trial
        </a>
  
        <a
          href=""
          className="block px-5 py-3 mt-4 font-medium text-blue-500 rounded-lg hover:text-blue-600 sm:mt-0"
        >
          Schedule a demo
        </a>
      </div>
    </div>
  </aside>
  
  </>
  
  )
}
