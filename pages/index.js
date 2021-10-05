import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

const ThreeCard = dynamic(() => import("../components/ThreeCard"));
const productsDb = [
  {
    name: "The Catalyzer",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 16.0,
  },
  {
    name: "Shooting Stars",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 21.15,
  },
  {
    name: "Neptune",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 12.0,
  },
  {
    name: "The 400 Blows",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 18.4,
  },
  {
    name: "The Catalyzer",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 16.0,
  },
  {
    name: "Shooting Stars",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 21.15,
  },
  {
    name: "Neptune",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 12.0,
  },
  {
    name: "The 400 Blows",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
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
 
  const containerz = {
    hidden: { opacity: 0, delay: 5 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 4.5
      }
    }
  }
  const itemz = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <motion.section exit={{ opacity: 0 }}>
      {isFirstMount && <InitialTransition />}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mt-10 pt-20 mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">         
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={content(isFirstMount)}
                  className=" "
                >
                  <div className=" text-5xl font-extrabold leading-none tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                      Hello world
                    </span>
                  </div>   
                  <motion.h1 variants={title} className="text-6xl font-black text-left text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Data to enrich your</span>{' '}
                    <span className="block  xl:inline bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-500">everyday business</span>
                  </motion.h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white   bg-gradient-to-r from-green-400 to-blue-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </main>
          </div>    
        </div>   
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2  sm:h-90  "       >
          <motion.div
            variants={containerz}
            initial="hidden"
            animate="show"
          >    
            <Image       
              placeholder="blur"
              blurDataURL
              className="h-56 w-full object-cover md:h-96 lg:w-full lg:h-3 sm:h-full"
              src="/bruce-mars-FWVMhUa_wbY-unsplash.webp" 
              layout='responsive'
              width="1920"
              height="1280"  
              alt="user profile image"  
              //src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            />
          </motion.div>
        </div>          
      </div>
      <div ref={observe}>
        {/* comments will load when inView is true */}
        {inView && <ThreeCard />}
      </div>
    </motion.section>
  );
    }

const Product = ({ img, category, name, price }) => (
  <div className="w-full p-4 lg:w-1/4 md:w-1/2">
    <a className="relative block h-48 overflow-hidden rounded">
      <img
        alt="ecommerce"
        className="block object-cover object-center w-full h-full"
        src={img}
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
    width: '1200px'
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
//    <motion.div viewBox="10 10 1000 1000"
    <motion.div  
      className="absolute z-50 flex items-center justify-center w-full bg-gradient-to-r from-green-900 via-black to-blue-800"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex " >
        <pattern 
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
        <rect className="w-full h-full fill-current" viewBox="0 0 100 300" />
        <motion.rect 
          viewBox="0 0 100 300" 
          variants={text}
          className="w-full h-full text-gray-600 fill-current"
        />
        </pattern>
        <text   
          className="text-3xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Loans For Everyday Business
        </text>
      </motion.svg>
    </motion.div>
  );
};