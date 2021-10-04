/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Draggable from 'gsap/dist/Draggable';
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



const sliderTL = gsap.timeline({repeat: -1});
const slides = document.querySelectorAll(".slide");

slides.forEach(slide => { 
  sliderTL
    .from(slide, {duration: 1, opacity: 0})    
    .to(slide, {duration: 1, opacity: 0}, "+=3")
});
}, []);
  return (
    <>
<div class="slider">
  <div class="container">
    
    <div class="slide slide--1">
      <div class="slider__image slider__image--1"></div>   
      <div class="slide__text">
        <h1 class="slide__header">
          Slide 1
        </h1>
      </div>  
    </div>
    
    <div class="slide slide--2">
     <div class="slider__image slider__image--1"></div>  
      <div class="slide__text">
        <h1 class="slide__header">
          Slide 2
        </h1>
      </div>  
    </div>
    
        <div class="slide slide--3">
      <div class="slider__image slider__image--1"></div>  
      <div class="slide__text">
        <h1 class="slide__header">
          Slide 3
        </h1>
      </div>  
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
  
  
    
  </div>
</div>
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
     
          /* Font imports */
          @import url('https://fonts.googleapis.com/css?family=Playfair+Display|Roboto&display=swap');
          
          /* Styles set up */
          *,
          *::before,
          *::after{
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }
          
          html{
            font-size: 16px;
            box-sizing: border-box;
          }
          
          body{
            font-family: 'Roboto', sans-serif;
          }
          
          .container{
            width: calc(100% - 70px);
            margin: 0 auto;
          }
          
          h1{
            font-family: 'Playfair Display', serif;
            font-size: 4.1875rem;
          }
          
          
          /* Slider styles */
          .slider{
            position: relative;
            
            width: 100%;
            height: 100vh;
          }
            .slider  .slide{
              width: 100%;
              height: 100vh;
              
              display: flex;
              align-items: flex-end;
          
              position: absolute;
              top: 0%;
              left: 0%;
            }
            .slider --1{
                background-color: pink;
                 z-index: 3;
                 // opacity: 0;
              }
              
              .slider --2{
                background-color: beige;
                z-index: 2;
              }
              
              .slider --3{
                background-color: purple;
                z-index: 1;
              }
              
              .slider __text{
                 position: relative;
                 padding-bottom: 40vh;
              } 
              .slider  .slide__header{
                  color: #fff;
                }
           
           
              
                .slider __nav{
              display: flex;
              flex-direction: column;
              align-content: space-between;  
                
              position: absolute;
              right: 70px;
              top: 50%;
              transform: translateY(-50%);
                }
                .slider .slider__count{
                  position: relative;
                }
                .slider  --top{
                    position: absolute;
                    left:-9px;
                    top: -40px;
                  } 
                  .slider  --bottom{
                   position: absolute;
                   left: -7px;
                   bottom: -20px;
                 }
                  
                  .count{
                    color: #fff;
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                  }
                    .slider --top-1{
                      opacity: 1;
                    }
                    .slider  --bottom-1{
                      opacity: 1;
                    }
                  
                
                
                .slider__bar{
                  width: 2px;
                  height: 200px;
                  position: relative;
                  // border: 1px solid red;
                }
                .slider --static{
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -1;
                    
                    width: 100%;
                    height: 100%;
                    
                    background-color: grey;
                  }
                  
                  .slider  --dynamic{
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    
                    width: 100%;
                    height: 0;
                    
                    background-color: red;
                  }
             
          
            
          
            
                  .slider __text div + div{
                  opacity: 0;
                }
 
 
                   `
      }}
    />
 </>
 )
}