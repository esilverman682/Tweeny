/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
 

{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    /* 
  Purpose: Infinite looping Slider
  
  Tasks:
  
  1. setup - gsap timeline object and dom elements
  2. slice #countTop1 so we can get only "#countTop" and add a number to id for animation purposes
  3. animation sliderBarDynamic
  4. animate CountTop1 out of view - stuck here
*/

/* 
  Purpose: Infinite looping Slider
  
  Tasks:
  
  1. setup - gsap timeline object and dom elements
  2. slice #countTop1 so we can get only "#countTop" and add a number to id for animation purposes
  3. animation sliderBarDynamic
  4. animate CountTop1 out of view - stuck here
*/

let sliderTL = gsap.timeline(),
previousCount = document.querySelectorAll(".count--top").length,
currentCount = 0,
nextCount = 1;

const sliderBarDynamic = document.querySelector("#sliderBarDynamic");
const countTopNums = document.querySelectorAll(".count--top");
const countBottomNums = document.querySelectorAll(".count--bottom");
const countTexts = document.querySelectorAll(".slider__text-wrapper");
const countImages = document.querySelectorAll(".slider__image");
const nums = document.querySelectorAll(".count--top").length - 1;
const time = 5;

doCount(currentCount, nextCount);

setInterval(function(){
if (currentCount == nums) {
currentCount = -1;
}
currentCount++;
if (currentCount == 0) {
previousCount = nums;
} else {
previousCount = currentCount - 1;
}

if (currentCount == nums) {
nextCount = 0;
} else {
nextCount = currentCount + 1;
}
console.log(currentCount, nextCount)
doCount(currentCount, nextCount);
}, (time + 1)*1000)

function doCount(currentCount, nextCount) {
sliderTL = gsap.timeline();

sliderTL
.set(sliderBarDynamic, {
height: 0
}, 0)
.to(sliderBarDynamic, time, {
ease: Power0,
height: '100%'
}, 0)
.to(countTopNums[currentCount], .2, {
 ease: Power3.easeOut,
 opacity: 0
}, time)
.to(countTopNums[nextCount], .2, {
 ease: Power3.easeOut,
 opacity: 1
}, time)
.to(countBottomNums[currentCount], .2, {
 ease: Power3.easeOut,
 opacity: 0
}, time)
.to(countBottomNums[nextCount], .2, {
 ease: Power3.easeOut,
 opacity: 1
}, time)
.to(countTexts[currentCount], .5, {
 ease: Power3.easeOut,
 opacity: 0,
 marginLeft: 20
}, time)
.fromTo(countTexts[nextCount], .5, {
 ease: Power3.easeOut,
 opacity: 0,
 marginLeft: -20
}, {
 ease: Power3.easeOut,
 opacity: 1,
 marginLeft: 0
}, time + .25)
.to(countImages[currentCount], .5, {
 ease: Power3.easeOut,
 opacity: 0
}, time + .25)
.to(countImages[nextCount], .5, {
 ease: Power3.easeOut,
 opacity: 1
}, time + .25)
}










// let sliderTl = gsap.timeline({repeatDelay: 2, delay: 3, paused: false, repeat: -1}),
//     previousCount = 0,
//     currentCount = 0;
// const sliderBarDynamic = document.querySelector("#sliderBarDynamic");
// const countTopNums = document.querySelectorAll(".count--top");
// const countBottomNums = document.querySelectorAll(".count--bottom");
  
// gsap.set(sliderBarDynamic, {scaleY: 0, transformOrigin: '50% 0%'})

// sliderTl
//   .to(sliderBarDynamic, {duration: 2, scaleY: 1})
//   .add("nums-out-1")
//   .to(countTopNums[0], {duration: 0.4, opacity: 0}, "nums-out-1")           
//   .to(countBottomNums[0], {duration: 0.4, opacity: 0}, "nums-out-1")
//  .add("nums-in-2")
//   .to(countTopNums[1], {duration: 0.4, opacity: 1}, "nums-in-2")                 .to(countBottomNums[1], {duration: 0.4, opacity: 1}, "nums-in-2")
//   .to(sliderBarDynamic, {duration: 0.4, scaleY: 0}, "+=0.4")
//  .add("nums-out-2")
//   .to(sliderBarDynamic, {duration: 2, scaleY: 1}, "nums-out-2")
//   .to(countTopNums[1], {duration: 0.4, opacity: 0}, "+=1")                     .to(countBottomNums[1], {duration: 0.4, opacity: 0}, "<")
//  .add("nums-in-3")
//   .to(countTopNums[2], {duration: 0.4, opacity: 1}, "nums-in-3")                 .to(countBottomNums[2], {duration: 0.4, opacity: 1}, "nums-in-3")
//   .to(sliderBarDynamic, {duration: 0.4, scaleY: 0}, "+=0.4")


//   .to(countTopNums[previousCount], {duration: 0.4, opacity: 0}, "nums-out")       .to(countBottomNums[previousCount], {duration: 0.4, opacity: 0}, "nums-out")
//     .add(function(){
//     previousCount = currentCount;
//     currentCount+= 1;

//     // if(previousCount && currentCount >= 3){
//     //   previousCount = currentCount = 1;
//     // }

//   // console.log(sliderCountTop) // undefined
//   console.log("previousCount: " + previousCount)  // = 1  
//   console.log("currentCount: " + currentCount)  // = 1


//   })
//   .add("nums-in")
//   .to(countTopNums[currentCount], {duration: 0.4, opacity: 1}, "nums-in")         .to(countBottomNums[currentCount], {duration: 0.4, opacity: 1}, "nums-in") 
//   .to(sliderBarDynamic, { duration: 1, opacity: 0, scaleY: 0, transformOrigin:      '50% 100%'}, "nums-in")
//   .add("nums-in-2")
//   .to(countTopNums[currentCount], {duration: 0.4, opacity: 1}, "nums-in-2")       .to(countBottomNums[currentCount], {duration: 0.4, opacity: 1}, "nums-in-2") 
//   .to(sliderBarDynamic, { duration: 1, opacity: 0, scaleY: 0, transformOrigin:      '50% 100%'}, "nums-in")

// function incrementCount(){

// }




// let sliderTl = gsap.timeline({repeatDelay: 2, delay: 3, paused: false, repeat: -1}),
//     previousCount = 0,
//     currentCount = 0;
// const sliderBarDynamic = document.querySelector("#sliderBarDynamic");
// const countTopNums = document.querySelectorAll(".count--top");
// const countBottomNums = document.querySelectorAll(".count--bottom");
  
// gsap.set(sliderBarDynamic, {scaleY: 0, transformOrigin: '50% 0%'})

// sliderTl
//   .to(sliderBarDynamic, {duration: 2, scaleY: 1})
//   .add("nums-out-1")
//   .to(countTopNums[0], {duration: 0.4, opacity: 0}, "nums-out-1")           
//   .to(countBottomNums[0], {duration: 0.4, opacity: 0}, "nums-out-1")
//  .add("nums-in-2")
//   .to(countTopNums[1], {duration: 0.4, opacity: 1}, "nums-in-2")                 .to(countBottomNums[1], {duration: 0.4, opacity: 1}, "nums-in-2")
//   .to(sliderBarDynamic, {duration: 0.4, scaleY: 0}, "+=0.4")
//  .add("nums-out-2")
//   .to(sliderBarDynamic, {duration: 2, scaleY: 1}, "nums-out-2")
//   .to(countTopNums[1], {duration: 0.4, opacity: 0}, "+=1")                     .to(countBottomNums[1], {duration: 0.4, opacity: 0}, "<")
//  .add("nums-in-3")
//   .to(countTopNums[2], {duration: 0.4, opacity: 1}, "nums-in-3")                 .to(countBottomNums[2], {duration: 0.4, opacity: 1}, "nums-in-3")
//   .to(sliderBarDynamic, {duration: 0.4, scaleY: 0}, "+=0.4")


//   .to(countTopNums[previousCount], {duration: 0.4, opacity: 0}, "nums-out")       .to(countBottomNums[previousCount], {duration: 0.4, opacity: 0}, "nums-out")
//     .add(function(){
//     previousCount = currentCount;
//     currentCount+= 1;

//     // if(previousCount && currentCount >= 3){
//     //   previousCount = currentCount = 1;
//     // }

//   // console.log(sliderCountTop) // undefined
//   console.log("previousCount: " + previousCount)  // = 1  
//   console.log("currentCount: " + currentCount)  // = 1


//   })
//   .add("nums-in")
//   .to(countTopNums[currentCount], {duration: 0.4, opacity: 1}, "nums-in")         .to(countBottomNums[currentCount], {duration: 0.4, opacity: 1}, "nums-in") 
//   .to(sliderBarDynamic, { duration: 1, opacity: 0, scaleY: 0, transformOrigin:      '50% 100%'}, "nums-in")
//   .add("nums-in-2")
//   .to(countTopNums[currentCount], {duration: 0.4, opacity: 1}, "nums-in-2")       .to(countBottomNums[currentCount], {duration: 0.4, opacity: 1}, "nums-in-2") 
//   .to(sliderBarDynamic, { duration: 1, opacity: 0, scaleY: 0, transformOrigin:      '50% 100%'}, "nums-in")

// function incrementCount(){

// }


 
}, []);

  return (
    <>
<div class="slider">
  <div class="container">
  
  <div class="slider__images">
    <div class="slider__image slider__image--1"></div>     
    <div class="slider__image slider__image--2"></div>
    <div class="slider__image slider__image--3"></div>
  </div>
  
  <div class="slider__nav">
    <div class="slider__count slider__count--top">
      <div id="countTop1" class="count count--top count--top-1">01</div>
      <div id="countTop2" class="count count--top count--top-2">02</div>
      <div id="countTop3" class="count count--top count--top-3">03</div>
    </div>
    <div class="slider__bar">
      <div id="sliderBarDynamic" class="slider__bar--dynamic"></div>
      <div class="slider__bar--static"></div>
    </div>
    <div class="slider__count slider__count--bottom">
      <div id="countBottom1" class="count count--bottom count--bottom-1">02</div>
      <div id="countBottom2" class="count count--bottom count--bottom-2">03</div>
      <div id="countBottom3" class="count count--bottom count--bottom-3">01</div>
    </div>
  </div>
  
  <div class="slider__text">
    <div class="slider__text-wrapper slider__text-wrapper--1">
      <h1 class="slider__header">
        Slide 1
      </h1>
    </div>
    <div class="slider__text-wrapper slider__text-wrapper--2">
      <h1 class="slider__header">
        Slide 2
      </h1>
    </div>
    <div class="slider__text-wrapper slider__text-wrapper--3">
      <h1 class="slider__header">
        Slide 3
      </h1>
    </div>
  </div>
    
  </div>
</div>
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Gilda+Display&family=Roboto&display=swap');

          *,
          *::before,
          *::after{
          padding:0;
          margin:0;
          box-sizing:inherit;
          }
          
          html{
          font-size:16px;
          box-sizing:border-box;
          }
          
          body{
          font-family: 'Roboto', sans-serif;
          color:#444444;
          font-weight: 300;
          line-height: 1.6;
          }
          
          img{
          max-width:100%;
          }
          
          h1{
            font-size: 100px;
            color: #fff;
            font-family: 'Gilda Display', serif;
            font-weight: 300;
            line-height: 1;
          }
          
          h2{
          
          }
          
          
          h3{
          
          }
          
          
          P{
            color: #fff;
          }
          
          a{
          text-decoration:none;
          color:#ffffff;
            font-size: 24px;
          }
          
          ul{
          list-style-type:none;
          }
          
          
          
          // Slider 
          .slider{
            width: 100%;
            height: 100vh;
            overflow: hidden;
            position: relative;
            
            &__slide{
              width: 100%;
              height: 100%;
              display: flex;
              
              position: absolute;
              top: 0;
              left:0;
              
              &--1{
                z-index: 4;
              }
              
              &--2{
                z-index: 3;
              }
              
              &--3{
                z-index: 2;
              }
              
              &--4{
                z-index: 1;
              }
            }
            
            &__img{
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: -1;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              
              &--1{
                background-image: url('https://i.postimg.cc/Y0T3F1tc/about-landing.jpg');
              }
              
              &--2{
                background-image: url('https://i.postimg.cc/FHHyKWyf/i-Stock-1148043788.jpg');
              }
              
              &--3{
                background-image: url('https://i.postimg.cc/tTqp06QH/i-Stock-1064136816.jpg');
              }
              
              &--4{
                background-image: url('https://i.postimg.cc/435R13K2/i-Stock-1179976698.jpg');
              }
            }
            
            &__text{
              align-self: flex-end;
              padding: 0 0 5vw 15vh;
              opacity: 0;
              width: 80%;
              max-width: 1005px;
              
              .slider__header{
                margin-bottom: 40px;
                text-transform: capitalize;
              }
              
              .cta{
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 6px;
                margin-left: 65px;
                position: relative;
                
                &:before{
                  content: '';
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  left: -55px;
                  width: 40px;
                  height: 1px;
                  background-color: white;
                }
              }
            }
            
            // Slider Navigation
            &__navigation{
              width: 21px;
              height: 400px;
              position: fixed;
              top: 50%;
              transform: translateY(-50%);
              left: calc(100% - 5vw);
              z-index: 10;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            }
            
            .count--top{
              
                position: absolute;
                top: 0;
                left: 0;
              
              // position:
            }
            
            .count{
              opacity: 0;
            }
            
            .count:first-child{
              opacity: 1;
            }
            
            .count--bottom{
              position: absolute;
              bottom: 0;
              left: 0;
            }
            
            &__bar{
              width: 2px;
              height: 250px;
              position: relative;
              
              &--dynamic{
                width: 100%;
                height: 100%;
                background-color: #FF69B4;
                transform-origin: top center;
                
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
              }
              
              &--static{
                width: 100%;
                height: 100%;
                background-color: darkgrey;
                
                position: absolute;
                top: 0;
                left: 0;
              }
            }
          }
          // Slider end
          
          
          
          
          /* Image links 
          1: https://i.postimg.cc/Y0T3F1tc/about-landing.jpg
          2: https://i.postimg.cc/FHHyKWyf/i-Stock-1148043788.jpg
          3: https://i.postimg.cc/tTqp06QH/i-Stock-1064136816.jpg
          4: https://i.postimg.cc/435R13K2/i-Stock-1179976698.jpg
          */
          
     
                   `
      }}
    />
 </>
 )
}