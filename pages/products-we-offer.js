import { motion } from "framer-motion";
import React from "react";
 
import HeroStrawberry from "../components/HeroStrawberry"
import Accordion from "../components/Accordion"

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
 <>
  
    <div>
      <Accordion></Accordion>
    </div>
  </>
  );
};

export default ContactPage;
