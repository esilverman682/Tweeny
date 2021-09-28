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
    <aside className="relative overflow-hidden text-gray-300 bg-gray-900 rounded-xl lg:flex">
    <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
      <div className="max-w-xl mx-auto lg:ml-0">
        <p className="text-sm font-medium">
          Lorem ipsum dolor sit amet.
        </p>
  
        <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </p>
  
        <p className="hidden lg:mt-4 lg:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque
          amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
        </p>
  
        <a
          href=""
          className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Get started today
        </a>
      </div>
    </div>
  
    <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
      <img
        src="https://www.hyperui.dev/code/photos/women-2.jpeg"
        alt="Women smiling at college"
        className="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  </aside>
  
  
  
  )
}
