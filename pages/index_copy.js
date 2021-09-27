import React from "react";
import { motion } from "framer-motion";
 
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
// const Comments = dynamic(() => import("@/components/Comments"));
const Comments = dynamic(() => import("../components/FallText"));


const productsDb = [
  {
    name: "The Catalyzer",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    width: "420",
    height: "260",
    price: 16.0,
  },
  {
    name: "Shooting Stars",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    width: "420",
    height: "260",
    price: 21.15,
  },
  {
    name: "Neptune",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",   
    width: "420",
    height: "260",
    price: 12.0,
  },
  {
    name: "The 400 Blows",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    width: "420",
    height: "260",
    price: 18.4,
  },
  {
    name: "The Catalyzer",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",    
    width: "420",
    height: "260",
    price: 16.0,
  },
  {
    name: "Shooting Stars",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    width: "420",
    height: "260",
    price: 21.15,
  },
  {
    name: "Neptune",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    width: "420",
    height: "260",
    price: 12.0,
  },
  {
    name: "The 400 Blows",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    width: "420",
    height: "260",
    price: 18.4,
  },
];

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const products = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function IndexPage({ isFirstMount }) {
 
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  
  return (
<>
    <motion.section exit={{ opacity: 0 }}>
      {isFirstMount && <InitialTransition />}
      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        className="space-y-12"
      >
   
      <section className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
    style={{minHeight: "800px", background:"url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1280')"}}>
    <div className="max-w-screen-xl	mx-auto  sm:  lg: flex items-center justify-center">
        <div className="lg:w-3/6 lg:pr-0 pr-0 pl-0">
       {/*      <motion.h1 variants={title} className="text-6xl font-black text-left text-white ">
          Welcome to tailstore!!
          
        </motion.h1>   */} 
        <motion.h1 className="text-white">
           Welcome to tailstore!!
          
        </motion.h1>
       <h1 className="font-medium text-5xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
       
           <p className="leading-relaxed mt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>


  
    
        <div className="lg:w-1/2 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone</label>
                <input type="email" id="phone" name="phone" className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea 
 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"> 
                </textarea>
            </div>
            <button className="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg">Submit</button>
        </div>
 


    </div>
</section>
</motion.div>
     
<div ref={observe}>
        {/* comments will load when inView is true */}
        {inView && <Comments />}
</div>
     
      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        className="space-y-12"
      >
        <motion.h1 variants={title} className="text-6xl font-black text-center">
          Welcome to tailstore!!
          
        </motion.h1>


        <motion.section variants={products} className="text-gray-700 body-font">

  


          <div className="container px-5 pt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {productsDb.map((product, index) => (
                <Product key={index} {...product} />
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>


    </motion.section></>
  );
}




const Product = ({ img, category, name, price }) => (
  <div className="w-full p-4 lg:w-1/4 md:w-1/2">
    <a className="relative block h-48 overflow-hidden rounded">
      <img
        alt="ecommerce"
        className="block object-cover object-center w-full h-full"
        src={img}
        width="420"
        height="260"
      />
    </a>
    <div className="mt-4">
      <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
        {category}
      </h3>
      <h2 className="text-lg font-medium text-gray-900 title-font">{name} </h2>
      <p className="mt-1">${price.toFixed(2)}</p>
    </div>
  </div>
);

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          tailstore
        </text>
      </motion.svg>
    </motion.div>
  );
};
