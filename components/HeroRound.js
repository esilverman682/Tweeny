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
    <section role="banner" className="p-4 bg-white lg:h-screen">
    <div className="mx-auto lg:grid max-w-screen-2xl lg:gap-y-8 lg:gap-x-16 lg:grid-cols-2 lg:items-center lg:h-full">
      <div className="px-4 py-8 text-center space-y-8 sm:p-16 lg:text-left">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
  
        <p className="max-w-xl mx-auto text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
  
        <div className="flex justify-center mt-8 lg:justify-start">
          <a href="" className="inline-block px-5 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500">
            Start free trial
          </a>
  
          <a href="" className="inline-block px-5 py-3 font-medium text-blue-600 rounded-lg hover:text-blue-500">
            More about us
          </a>
        </div>
      </div>
  
      <div className="relative h-64 sm:h-96 lg:h-full">
        <img
          src="https://www.hyperui.dev/code/photos/women-1.jpeg"
          alt="Woman university graduate"
          className="absolute inset-0 object-cover object-bottom w-full h-full rounded-3xl"
        />
  
        <figure
          className="hidden sm:absolute sm:max-w-sm sm:p-8 sm:bg-white sm:shadow-xl sm:block sm:rounded-2xl sm:bottom-8 sm:left-8"
        >
          <blockquote>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi labore laborum dolor iure a natus nisi cum
              quaerat.
            </p>
          </blockquote>
  
          <figcaption className="flex items-center mt-6 text-sm text-gray-500 space-x-1">
            — Libby Graham,
  
            <cite className="not-italic">
              University of Elrond
            </cite>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
  
  )
}
