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
    <aside className="overflow-hidden text-white lg:grid bg-violet-600 rounded-xl lg:grid-cols-2 lg:items-center">
    <div className="p-12 text-center sm:p-16 lg:p-24 lg:text-left">
      <div className="max-w-lg mx-auto lg:ml-0 lg:pt-12">
        <p className="text-3xl font-bold sm:text-4xl">
          Lorem ipsum, dolor sit amet consectetur.
        </p>
  
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iusto odit, magni repellat aliquam!
        </p>
      </div>
    </div>
  
    <div className="lg:pt-24">
      <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
        <img
          className="absolute inset-0 object-cover w-full h-full lg:rounded-tl-3xl"
          src="https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80"
          alt=""
        />
      </div>
    </div>
  </aside>
  
  
  )
}
