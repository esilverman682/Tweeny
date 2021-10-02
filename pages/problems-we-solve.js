import React from "react";
//import Workspace from "@darth-knoppix/react-phone-show";
import { motion, useCycle } from "framer-motion";
  
//import sereja from "/bruce-mars-FWVMhUa_wbY-unsplash.webp";
//import husen from " /husen-siraaj-zyJkh98ySE0-unsplash.webp";
//import houston from " /houston-ray-bkZlpn5iMEM-unsplash.webp";
//import dimitar from " /dimitar-donovski-RyvVnWaWbjI-unsplash.webp"
 
import Info from "./Info";
import Card from "./Card";
import Header from "./Header";

function App() {
 

  const [animate, toggleFocus] = useCycle(
    {
      container: { height: "25rem", top: "0rem", overflowX: "auto" },
      title: { opacity: 1 }
    },
    {
      container: { height: "100%", top: "-4.4rem", overflowX: "hidden" },
      title: { opacity: 0 }
    }
  );

  return (
    <div title={<Header />} info={<Info />}>

      <motion.h1
        className="title"
        animate={animate.title}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        Showcase
      </motion.h1>
      <motion.div
        className="card-container"
        animate={animate.container}
        initial={{ top: "0rem" }}
        transition={{ ease: "easeOut", delay: 0.1 }}
      >
        <Card title="Sereja Ris"  onToggleFocus={toggleFocus} />
 
 
   
   
   
   
        <Card title="Houston Ray" image src="/public/sereja-ris-zGyG2OyLu4k-unsplash.webp"  onToggleFocus={toggleFocus} />
        <Card
          title="Dimitar Donovski"
          image src="/public/sereja-ris-zGyG2OyLu4k-unsplash.webp" 
          onToggleFocus={toggleFocus}
        />
      </motion.div>




<style
      dangerouslySetInnerHTML={{
          __html: `
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
              "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 100vw;
            overflow-x: hidden;
          }
          
          /* Override - move to upstream */
          #root > div {
            height: auto;
            grid-template-rows: 10rem 1fr 1fr;
          }
          
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }
          
          .card {
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 1rem -0.2rem rgba(0, 0, 0, 0.2);
            width: auto;
            height: 100%;
            box-sizing: border-box;
            border-radius: 0.5rem;
          }
          
          .card .card-image-wrapper {
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
          }
          
          .title {
            color: black;
            align-self: flex-start;
            margin: 1rem;
          }
          
          .card-container {
            scroll-snap-type: x mandatory;
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            box-sizing: border-box;
            min-width: calc(100% - 2rem);
            position: relative;
            scrollbar-width: none;
          }
          
          .card-wrapper {
            padding: 1rem;
            width: 100%;
            min-width: 100%;
            box-sizing: border-box;
          }
          
          .card-container > .card-wrapper {
            scroll-snap-align: center;
          }
          
          .card-container > .card:first-child {
            margin-left: 0;
          }
          
          .card-container > .card:last-child {
            margin-right: 0;
          }
          
          .card-container::-webkit-scrollbar {
            display: none;
          }
          
          .card-image-container {
            margin: 0;
            color: black;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 100%;
          }
          
          .card-image {
            width: 100%;
            height: auto;
          }
          
          .card-image-wrapper {
            width: 100%;
            overflow: hidden;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          }
          
          .card-image-wrapper + figcaption {
            margin-bottom: 1rem;
            margin-top: 1rem;
            color: #1e1e1e;
            font-size: 0.9em;
          }
          
          .work-title {
            margin-bottom: 2rem;
            margin-top: 2rem;
          }
          
          .work-title > h1,
          .work-title > h2 {
            margin: 0;
          }
          
          .work-about {
            padding-right: 2rem;
            padding-left: 2rem;
            margin-top: 4rem;
          }
          
          .link {
            color: inherit;
          }
          
          .author {
            display: inline;
            margin: 0;
          }
          
          .author + p {
            margin-top: 0.1rem;
          } 
          
    `
      }}
    />
    </div>
  );
}

export default App;