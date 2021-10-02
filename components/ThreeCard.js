/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/image'

 
export default function ThreeCard() {
  return (
 
<>
 
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">  
    <div className="rounded overflow-hidden shadow-lg">
    <Image       
        className="h-full w-full object-cover md:w-full lg:w-full lg:w-full sm:w-full"
        src="/nordwood-themes-kRNZiGKtz48-unsplash.webp" 
        layout="intrinsic"
        height="600px"
        width="1200px"
        alt="user profile image"  
        //src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>

    <div className="rounded overflow-hidden shadow-lg">
      <Image       
        className="h-full w-full object-cover md:w-full lg:w-full lg:w-full sm:w-full"
        src="/adeolu-eletu-unRkg2jH1j0-unsplash.webp" 
        layout="intrinsic"
        height="600px"
        width="1200px"
        alt="user profile image"  
        //src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      />
       <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">River</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div>
    </div>

  
    <div className="rounded overflow-hidden shadow-lg">
    <Image       
        className="h-full w-full object-cover md:w-full lg:w-full lg:w-full sm:w-full"
        src="/keren-levand-pm-e64IOYHM-unsplash.webp" 
        layout="intrinsic"
        height="600px"
        width="1200px"
        alt="user profile image"  
        //src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Forest</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
  
  </div>
 

    <style
      dangerouslySetInnerHTML={{
          __html: `
 
                   `
      }}
    />
 
</>
  )
}
