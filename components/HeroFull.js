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
    <section
    className="relative text-white bg-center bg-no-repeat bg-cover"
    style={{backgroundImage: "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)"}}
    role="banner"
  >
    <span className="absolute inset-0 bg-black opacity-60"></span>
  
    <div className="relative px-4 py-24 mx-auto max-w-screen-xl sm:py-36 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:items-center">
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
  
        <p className="mt-4 sm:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Illo fuga quam quae sequi cupiditate voluptas, eligendi ad iure at saepe?
        </p>
  
        <a href="" className="relative inline-block px-12 py-3 mt-8 overflow-hidden border-2 border-white transition-colors hover:border-sky-500 group">
          <span className="absolute inset-0 transition-transform origin-left transform scale-x-0 bg-sky-500 group-hover:scale-x-100"></span>
  
          <span className="relative text-sm font-medium tracking-widest uppercase">
            Take a look
          </span>
        </a>
      </div>
    </div>
  </section>
  
  
  )
}
