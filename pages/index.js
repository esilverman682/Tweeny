import React from "react";
import { motion } from "framer-motion";
//import '/pages/assets/Raspberry_Pi_Logo.svg' 
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
import Layout from "../components/Layout";
import HeroForm from "../components/HeroForm";
import Hero from "../components/Hero";


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
      <Hero></Hero>
  <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" 
    style={{
      backgroundImage: 
        "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
    }}
  >
       <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold">Multimedia products</p>
        <p className="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
        <a 
          href="#" 
          className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
            Contact us
        </a>
        </div>  
    </div>

<div ref={observe}>
    
    
        {/* comments will load when inView is true */}
        {inView && <Comments />}
</div>
 
<HeroForm></HeroForm>


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
          className="text-2xl font-bold hello"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)"}}
        >
    Small Business Financing
        </text>
      </motion.svg>
      
    </motion.div>
  );
};
