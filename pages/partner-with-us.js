import { motion } from "framer-motion";
 
import React from "react";
 import New from '../components/new'
 import HeroHalfTwo from '../components/HeroHalfTwo'
 
const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

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

const inputs = {
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

const ContactPage = () => {
  return (
 
    <motion.section
      exit={{ opacity: 0 }}
      className="relative text-gray-700 body-font"
    >
 
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
        className="container px-5 py-24 mx-auto"
      >
   
        <motion.div
          variants={title}
          className="flex flex-col w-full mb-12 text-center"
        >
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Contact Us
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
          <New></New>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
