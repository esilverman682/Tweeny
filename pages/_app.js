/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence } from "framer-motion";
import React from 'react'
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
//import Image from 'next/image'
function MyApp({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = React.useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component
          isFirstMount={isFirstMount}
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
