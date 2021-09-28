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
<aside className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
  <div className="relative z-10 px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div className="max-w-xl text-center space-y-8 sm:text-right sm:ml-auto">
      <h2 className="text-4xl font-bold sm:text-5xl">
        New product launched!
        <span className="hidden sm:block">
          Impossible to put down
        </span>
      </h2>

      <p className="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, fuga voluptatum ex rem enim deleniti
        officiis, odio voluptatibus non soluta! Quo, explicabo aspernatur!
      </p>

      <a className="inline-flex items-center px-6 py-3 font-medium bg-black rounded-full hover:opacity-75" href="">
        Get it now

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>

  <div className="absolute inset-0 w-full h-full mix-blend-multiply">
    <img
      src="https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
      alt="New robot toy"
      className="absolute inset-0 object-cover object-top w-full h-full"
    />
  </div>
</aside>


  )
}
