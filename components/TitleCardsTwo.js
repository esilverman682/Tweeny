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
    <section className="shadow-2xl rounded-3xl">
    <div className="p-8 text-center sm:p-12">
      <p className="text-sm font-semibold tracking-widest text-pink-500 uppercase">Your order is on the way</p>
  
      <h5 className="mt-6 text-3xl font-bold">Thanks for your purchase, we're getting it ready!</h5>
  
      <a className="inline-block w-full py-4 mt-8 text-sm font-bold text-white bg-pink-600 rounded-full shadow-xl" href="">
        Track Order
      </a>
    </div>
  </section>
  
  )
}
