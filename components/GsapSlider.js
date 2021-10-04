/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Draggable from 'gsap/dist/Draggable';
{/*Reference https://codepen.io/hexagoncircle/pen/LYpaPQp */}
 export default function Some() {
 
  useEffect(() => {
 gsap.registerPlugin(Draggable)
    gsap.registerPlugin(ScrollTrigger);
    console.clear();
    const colorArray = [
      "#683A5E",
      "#262626",
      "#426F42",
      "#8B814C",
      "#36648B",
      "#36648B"
    ];
    const slides = document.querySelectorAll("section");
    const container = document.querySelector("#panelWrap");
    let dur = 0.5;
    let offsets = [];
    let oldSlide = 0;
    let activeSlide = 0;
    let dots = document.querySelector(".dots");
    let navDots = [];
    let iw = window.innerWidth;
    const mouseAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const handAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const cursorAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const arrowAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
    document.querySelector("#leftArrow").addEventListener("click", slideAnim);
    document.querySelector("#rightArrow").addEventListener("click", slideAnim);
    
    // set slides background colors and create the nav dots
    for (let i = 0; i < slides.length; i++) {
      gsap.set(slides[i], { backgroundColor: colorArray[i] });
      let newDot = document.createElement("div");
      newDot.className = "dot";
      newDot.index = i;
      navDots.push(newDot);
      newDot.addEventListener("click", slideAnim);
      dots.appendChild(newDot);
    }
    
    // icon animations for slide 1
    mouseAnim.fromTo(
      "#mouseRings circle",
      { attr: { r: 10 } },
      { attr: { r: 40 }, duration: 0.8, stagger: 0.25 }
    );
    mouseAnim.fromTo(
      "#mouseRings circle",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, stagger:0.25 },
      0
    );
    mouseAnim.fromTo(
      "#mouseRings circle",
      { opacity: 1 },
      { opacity: 0, duration: 0.4, stagger:0.25 },
      0.4
    );
    
    handAnim.to("#hand", { duration: 0.75, rotation: -10, transformOrigin: "center bottom" });
    handAnim.to("#hand", { duration: 0.5, rotation: 14, ease: "power3.inOut" });
    handAnim.to("#hand", { duration: 1, rotation: 0, transformOrigin: "center bottom" });
    
    cursorAnim.to("#cursor", { duration: 0.25, x: -22 });
    cursorAnim.to(
      "#iconCircles circle",
      0.5,
      { duration: 0.5, attr: { r: 6 }, stagger:0.15 },
      "expand"
    );
    cursorAnim.to("#cursor", { duration: 1.1, x: 40 }, "expand");
    cursorAnim.to("#cursor", { duration: 0.75, x: 0 }, "contract");
    cursorAnim.to("#iconCircles circle", { duration: 0.5, attr: { r: 4 } }, "contract");
    
    arrowAnim.to("#caret", {
      duration: 0.5,
      attr: { points: "60 30, 35 50, 60 70" },
      repeat: 3,
      yoyo: true,
      ease: "power2.inOut",
      repeatDelay: 0.25
    });
    
    // get elements positioned
    gsap.set(".dots, .titleWrap", { xPercent: -50 });
    gsap.set(".arrow", { yPercent: -50 });
    gsap.set(".title", { y: 30 });
    
    // lower screen animation with nav dots and rotating titles
    const dotAnim = gsap.timeline({ paused: true });
    dotAnim.to(
      ".dot",
      {
        stagger: { each: 1, yoyo: true, repeat: 1 },
        scale: 2.1,
        rotation: 0.1,
        ease: "none"
      },
      0.5
    );
    dotAnim.to(
      ".title",
      slides.length + 1,
      { y: -(slides.length * 30), rotation: 0.01, ease: "none" },
      0
    );
    dotAnim.time(1);
    
    // make the whole thing draggable
    let dragMe = Draggable.create(container, {
      type: "x",
      edgeResistance: 1,
      snap: offsets,
      inertia: true,
      bounds: "#masterWrap",
      onDrag: tweenDot,
      onThrowUpdate: tweenDot,
      onDragEnd: slideAnim,
      allowNativeTouchScrolling: false,
      zIndexBoost: false
    });
    
    dragMe[0].id = "dragger";
    sizeIt();
    
    // main action check which of the 4 types of interaction called the function
    function slideAnim(e) {
      oldSlide = activeSlide;
      // dragging the panels
      if (this.id === "dragger") {
        activeSlide = offsets.indexOf(this.endX);
      } else {
        if (gsap.isTweening(container)) {
          return;
        }
        // arrow clicks
        if (this.id === "leftArrow" || this.id === "rightArrow") {
          activeSlide =
            this.id === "rightArrow" ? (activeSlide += 1) : (activeSlide -= 1);
          // click on a dot
        } else if (this.className === "dot") {
          activeSlide = this.index;
          // scrollwheel
        } else {
          activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
        }
      }
      // make sure we're not past the end or beginning slide
      activeSlide = activeSlide < 0 ? 0 : activeSlide;
      activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
      if (oldSlide === activeSlide) {
        return;
      }
      // if we're dragging we don't animate the container
      if (this.id != "dragger") {
        gsap.to(container, dur, { x: offsets[activeSlide], onUpdate: tweenDot });
      }
    }
    
    // update the draggable element snap points
    function sizeIt() {
      offsets = [];
      iw = window.innerWidth;
      gsap.set("#panelWrap", { width: slides.length * iw });
      gsap.set(slides, { width: iw });
      for (let i = 0; i < slides.length; i++) {
        offsets.push(-slides[i].offsetLeft);
      }
      gsap.set(container, { x: offsets[activeSlide] });
      dragMe[0].vars.snap = offsets;
    }
    
    gsap.set(".hideMe", { opacity: 1 });
    window.addEventListener("wheel", slideAnim);
    window.addEventListener("resize", sizeIt);
    
    // update dot animation when dragger moves
    function tweenDot() {
      gsap.set(dotAnim, {
        time: Math.abs(gsap.getProperty(container, "x") / iw) + 1
      });
    }
    
  
}, []);
  return (
    <>
<div class="hideMe">
  <h1>Horizontal full-screen slider (GSAP 3)<span>Mousewheel, nav dot, drag/throw &amp; arrow controls</span></h1>
  <svg id="leftArrow" class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <g strokeLinejoin="round" strokeLinecap="round" >
      <circle r="46" cx="50" cy="50" />
      <polyline points="60 25, 30 50, 60 75" ></polyline>
    </g>
  </svg>
  <svg id="rightArrow" class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <g strokeLinejoin="round" strokeLinecap="round" >
      <circle r="46" cx="50" cy="50" />
      <polyline points="40 25, 70 50, 40 75" ></polyline>
    </g>
  </svg>
  <div id="masterWrap">
    <div id="panelWrap">
      <section>
        <h3>Controls</h3>
        <p>You can control the slider in 4 ways</p>
        <div class="iconWrap">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <path d="M54.53,41.57a12.22,12.22,0,0,1,1.54,5.9c0,3.54-1.76,6.62-4.57,7.52v4.22H70.9A49.15,49.15,0,0,0,63.77,39C60.28,33.65,56,30.18,51.5,29.52v9.12A6.66,6.66,0,0,1,54.53,41.57Z" fill="#fff"/>
              <path d="M28.67,62.82c-.06.94-.08,1.86-.08,2.87,0,8.73,2.49,16.07,6.4,21.18s9.2,8,15,8,11.08-2.87,15-8,6.41-12.45,6.41-21.18c0-1,0-1.94-.08-2.89ZM53,88h0a1,1,0,0,1-1-1,1,1,0,0,1,1-1c7.43-.11,13.6-7.6,13.6-17v-.45a1,1,0,0,1,2.06,0v.48C68.62,79.14,61.86,87.75,53,88Z" fill="#fff" />
              <path d="M43.64,47.47a12.19,12.19,0,0,1,1.52-5.86,6.64,6.64,0,0,1,3-2.94V29.54c-4.44.72-8.73,4.2-12.18,9.49a48.9,48.9,0,0,0-7.09,20.18H48.15V55C45.38,54,43.62,51,43.64,47.47Z" fill="#fff"/>
              <path d="M42.3,14.7c1.86,1,4.21,1.16,6,1.72a5.37,5.37,0,0,1,2.08,1,2,2,0,0,1,.68,1.64c0,1.08-.56,2.89-2.18,5.54A1,1,0,0,0,49.27,26l.52.14a1,1,0,0,0,.88-.49c1.7-2.81,2.46-4.88,2.48-6.61a4.2,4.2,0,0,0-2.25-3.8c-1.86-1-4.23-1.26-6.06-1.79a5.74,5.74,0,0,1-2.1-.94,1.7,1.7,0,0,1-.65-1.45,9.45,9.45,0,0,1,1.65-4.37,1,1,0,0,0-1.76-1A11.1,11.1,0,0,0,40,11.08,4,4,0,0,0,42.3,14.7Z" fill="#fff"/>
              <g id="mouseRings" stroke="white" strokeWidth="2" fill="none">
                <circle cx="50" cy="47" r="12" />
                <circle cx="50" cy="47" r="12" />
                <circle cx="50" cy="47" r="12" />
                <circle cx="50" cy="47" r="12" />
              </g>
            </svg>
            <p>Mousewheel</p>
          </div>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="#fff">
              <path d="M71.35,4.5H28.65C23.86,4.5,20,8,20,12.35V72.84c0,4.31,3.91,7.85,8.7,7.85h6.47a20.93,20.93,0,0,1-2.86-8.48c-.07-.7-.16-1.37-.26-2H26.09a1.71,1.71,0,0,1-1.79-1.62V12.69a1.71,1.71,0,0,1,1.79-1.61H73.91a1.71,1.71,0,0,1,1.79,1.61V68.57a1.71,1.71,0,0,1-1.79,1.62h-3c0,1.35-.15,2.87-.31,4.58a13.55,13.55,0,0,1-1.15,4.33,16,16,0,0,1-.83,1.59h2.73c4.79,0,8.7-3.54,8.7-7.85V12.35C80.05,8,76.14,4.5,71.35,4.5ZM54.26,8.36H45.11V7.3h9.15Z"/>
              <path id="hand" d="M69.31,74.77c.15-1.59.24-3,.29-4.29.21-5.35-.39-8-1.53-8.75a2.07,2.07,0,0,0-1.23-.38,4.33,4.33,0,0,0-2.38.95s.92-5.51-3.85-5.95c-2,.15-2.78,1-3.11,1.77a2.74,2.74,0,0,0-.21.71,3.06,3.06,0,0,1,0,.39,2.26,2.26,0,0,1,0-.39c0-1.21-.19-4.8-4-4.8l-.7,0a2.62,2.62,0,0,0-2.5,1.71,16.13,16.13,0,0,0-.85,3.08,6.13,6.13,0,0,1-1.4-4.29l-.1-16.43a2.3,2.3,0,0,0-.2-.94,3.16,3.16,0,0,0-2.67-1.76c-.94,0-2,.56-2.75,2.19C40.9,43.76,41,67.49,41,67.49s-2.85-.19-4-7a6.63,6.63,0,0,0-2.85-4.38A4.42,4.42,0,0,0,32,55.17c-.57,0-1,.32-1.38,1.11a2.33,2.33,0,0,0-.11.28c-.81,2.18,1.54,6.6,2.61,13.92.09.61.17,1.24.24,1.9a19.6,19.6,0,0,0,2.68,7.94,19.24,19.24,0,0,0,1.24,1.85C40,85.78,39.79,89,40.35,95.5l21.79-.06s-.88-2.35,2.79-10.56A25.78,25.78,0,0,1,67.07,81l.38-.63a14,14,0,0,0,.79-1.48A13,13,0,0,0,69.31,74.77Z" />
            </svg>
            <p>Drag &amp; Throw</p>
          </div>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="#fff">
              <path id="cursor" d="M48,23.53,45.94,42.64c-.22,2-.58,5.35-.81,7.38L43.06,69.13c-.22,2,.91,2.65,2.51,1.4L60.7,58.65l5.84-4.57L81.67,42.21c1.6-1.27,1.14-3.28-1-4.48L71,32.35l9.26-16.69a1.87,1.87,0,0,0-.56-2.57L73.78,9.83a1.87,1.87,0,0,0-2.47.88L62,27.4,52.35,22C50.19,20.81,48.23,21.49,48,23.53Z" />
              <g id="iconCircles">
                <circle cx="17.5" cy="90" r="4" />
                <circle cx="33.75" cy="90" r="4" />
                <circle cx="50" cy="90" r="4" />
                <circle cx="66.25" cy="90" r="4" />
                <circle cx="82.5" cy="90" r="4" />
              </g>
            </svg>
            <p>Nav Dots</p>
          </div>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g strokeLinejoin="round" strokeLinecap="round" stroke="white" strokeWidth="5" fill="none">
                <circle r="36" cx="50" cy="50" />
                <polyline id="caret" points="40 30, 65 50, 40 70" ></polyline>
              </g>
            </svg>
            <p>Arrows</p>
          </div>
        </div>
      </section>
      <section> 
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/314556/greensock-logo.svg" 
        alt="GreenSock Logo" width="300" />
        <p>This slider demo is powered by GSAP 3 along with the Draggable and Inertia plugins</p>
      </section>
      <section> 
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/314556/clock.png" 
        width="75" alt="clock" />
        <h3>Bottom dot animation</h3>
        <p>See that animation on the bottom with the navigation dots and rotating slide titles? Its time is based on the position of the draggable element. Keep an eye on it as you drag or the slides animate.</p>
      </section>
      <section> 
        <img 
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/314556/sleepingDogShadow.svg" 
        alt="Dog Sleeping" width="250" />
        <h3>Random dog </h3>
        <p>Why? Because dogs are cool.</p>
      </section>
      <section id="section6"> 
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/314556/handTablet.svg" 
        width="200" alt="Mobile Tablet" />
        <h3>Handy for many things</h3>
        <p>We all need a full-screen slider from time to time.</p>
      </section>
      <section> 
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/314556/craigmasternew.png" 
        width="100" alt="Craigs Avatar" />
        <h3>Like this demo?</h3>
        <p>Follow me on Twitter.</p>
        <a href="https://twitter.com/Craig_PointC" 
        target="_top" 
        class="twitterFollow">
            Follow @Craig_PointC
        </a> 
      </section>
    </div>
  </div>
  <div class="dots">
  </div>
  <div class="titleWrap">
    <div class="title">
      1. Controlling the slider
    </div>
    <div class="title">
      2. Powered by GSAP
    </div>
    <div class="title">
      3. Bottom dot animation
    </div>
    <div class="title">
      4. Random dog
    </div>
    <div class="title">
      5. Sliders are useful
    </div>
    <div class="title">
      6. Follow me on Twitter
    </div>
  </div>
</div>
 
     <style
      dangerouslySetInnerHTML={{
          __html: `
     
          * {
            box-sizing: border-box;
          }
          
          body {
            padding: 0;
            margin: 0;
            font-family: "Roboto", sans-serif;
            color: white;
            overflow: hidden;
            height: 100%;
            width: 100%;
          }
          
          #masterWrap {
            width: 100%;
            height: 100%;
            position: absolute;
            overflow: hidden;
          }
          
          #panelWrap {
            height: 100%;
          }
          
          section {
            height: 100%;
            display: flex;
            align-content: center;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            position: relative;
            float: left;
          }
          
          .dot {
            width: 12px;
            height: 12px;
            border-radius: 100%;
            position: relative;
            background-color: #fff;
            margin: 12px 8px;
            cursor: pointer;
          
            float: left;
          }
          
          .dots {
            position: absolute;
            z-index: 100;
            left: 50%;
            bottom: 16px;
          }
          
          #leftArrow {
            left: 12px;
          }
          
          #rightArrow {
            right: 12px;
          }
          
          .arrow {
            position: absolute;
            z-index: 100;
            top: 50%;
            cursor: pointer;
            opacity: 0.75;
            width: 40px;
            height: 40px;
            stroke-width: 8px;
            stroke: white;
            fill: transparent;
          }
          
          h1 {
            position: absolute;
            z-index: 100;
            font-size: 18px;
            text-align: center;
            width: 100%;
            text-transform: capitalize;
          }
          
          span {
            display: block;
            font-size: 0.75em;
            font-weight: 400;
          }
          
          .titleWrap {
            height: 30px;
            position: absolute;
            z-index: 20;
            bottom: 50px;
            left: 50%;
            overflow-y: hidden;
          }
          
          .title {
            height: 30px;
            line-height: 30px;
            text-align: center;
          }
          
          h3,
          p {
            padding: 0;
            margin: 0;
          }
          
          h3 {
            font-size: 1.5em;
          }
          
          p {
            max-width: 400px;
            font-weight: 400;
            text-align: center;
          }
          
          .twitterFollow {
            padding: 16px;
            margin-top: 16px;
            cursor: pointer;
            border-radius: 500px;
            text-decoration: none;
            border: solid 2px white;
            color: white;
          }
          
          .twitterFollow:hover {
            background: white;
            color: #000;
          }
          
          .hideMe {
            opacity: 0;
          }
          .iconWrap {
            width: 300px;
            margin-top: 30px;
          }
          
          @media (min-width: 700px) {
            .iconWrap {
              width: 600px;
            }
          }
          .icon {
            text-align: center;
            width: 150px;
            float: left;
          }
          
          .icon svg {
            width: 50px;
            height: 50px;
            margin: 6px 0;
            overflow: visible;
          }
          
          @media (max-width: 480px) {
            section img {
              max-width: 200px;
            }
            p {
              max-width: 180px;
            }
          }
          
          Resources1× 0.5× 0.25×Rerun
          
          
     
                   `
      }}
    />
 </>
 )
}