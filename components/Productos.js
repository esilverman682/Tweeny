/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
 
import { useEffect } from "react";
 
 import Swiper from "swiper/";
{{/*REFERENCE: https://animated-gradient-background-generator.netlify.app/ */ }}
 
 export default function Some() {
 
  useEffect(() => { 
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    })
 
}, []);
return (
<>
 
 

<section>
  <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-24">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold sm:text-4xl">Special Offers</h2>
      <p className="mt-1 text-xl font-medium text-indigo-600 sm:text-2xl">The best Prices on All Our Products</p>
    </div>

    <div className="mt-8 sm:mt-16 swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <a href="" className="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div className="pb-4">
              <p className="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 className="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="pt-4">
              <p className="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a href="" className="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div className="pb-4">
              <p className="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 className="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="pt-4">
              <p className="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a href="" className="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div className="pb-4">
              <p className="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 className="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="pt-4">
              <p className="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a href="" className="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div className="pb-4">
              <p className="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 className="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="pt-4">
              <p className="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a href="" className="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div className="pb-4">
              <p className="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 className="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="pt-4">
              <p className="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-12 swiper-pagination"></div>
    </div>
  </div>
  <style
      dangerouslySetInnerHTML={{
          __html: `
   
          .swiper-pagination {
            bottom: 0;
            position: relative;
          }
     
                   `
      }}
    />
</section>

 

 </>
  );
}