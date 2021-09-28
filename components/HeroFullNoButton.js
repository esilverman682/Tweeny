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

export default function HeroFullNoButton() {
  return (
    <section
    className="relative text-white bg-center bg-no-repeat bg-cover"
    style={{
      backgroundImage: 
      "url(https://www.hyperui.dev/code/photos/house-1.jpeg)"
    }}
    role="banner"
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
    <div className="relative px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36 lg:items-center lg:flex lg:h-screen">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-widest uppercase">
          — About
        </p>
  
        <h1 className="mt-2 text-3xl font-bold sm:text-5xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h1>
  
        <p className="max-w-lg mt-4 sm:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fuga quam quae sequi cupiditate voluptas,
          eligendi ad iure at saepe?
        </p>
      </div>
    </div>
  </section>
  
  
  )
}
