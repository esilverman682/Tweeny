/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
 
import { useEffect } from "react";
 
 import Swiper from "swiper/react";
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
  <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-24">
    <div class="max-w-xl mx-auto text-center">
      <h2 class="text-2xl font-bold sm:text-4xl">Special Offers</h2>
      <p class="mt-1 text-xl font-medium text-indigo-600 sm:text-2xl">The best Prices on All Our Products</p>
    </div>

    <div class="mt-8 sm:mt-16 swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="" class="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div class="pb-4">
              <p class="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 class="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div class="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                class="object-cover"
              />
            </div>
            <div class="pt-4">
              <p class="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="" class="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div class="pb-4">
              <p class="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 class="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div class="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                class="object-cover"
              />
            </div>
            <div class="pt-4">
              <p class="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="" class="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div class="pb-4">
              <p class="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 class="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div class="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                class="object-cover"
              />
            </div>
            <div class="pt-4">
              <p class="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="" class="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div class="pb-4">
              <p class="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 class="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div class="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                class="object-cover"
              />
            </div>
            <div class="pt-4">
              <p class="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="" class="block font-medium transition-opacity divide-y divide-gray-100 hover:opacity-75">
            <div class="pb-4">
              <p class="text-xs tracking-widest text-indigo-400 uppercase">Download</p>
              <h2 class="mt-1 text-lg">Amazing Product for You</h2>
            </div>
            <div class="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                class="object-cover"
              />
            </div>
            <div class="pt-4">
              <p class="text-indigo-600">$49.99</p>
            </div>
          </a>
        </div>
      </div>

      <div class="mt-12 swiper-pagination"></div>
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