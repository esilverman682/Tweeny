import React from "react";
import Link from "next/link";
 
import { useRouter } from "next/router";
import useInView from "react-cool-inview";
import FooterForm from "./FooterForm";

const Layout = ({ children }) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <div className="flex flex-col min-h-screen">
       <div ref={observe}>
      {/* comments will load when inView is true */}
      {inView && <Header />}
    </div>
   
  
    
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className="text-gray-blue body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 p-2 text-white bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">tailstore</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto">
 
          <Link href="/problems-we-solve">
            <a
              className={
                asPath === "/problems-we-solve"
                  ? "font-black text-black"
                  : "hover:text-blue-900"
              }
            >
              Problems We Solve
            </a>
          </Link>
          <Link href="/products-we-offer">
            <a
              className={`hover:text-blue-900 ${
                asPath === "/products-we-offer" ? "font-black text-black" : ""
              }`}
            >
               Products We Offer
            </a>
          </Link>
          <Link href="/partner-with-us">
            <a
              className={`hover:text-blue-900 ${
                asPath === "/partner-with-us" ? "font-black text-black" : ""
              }`}
            >
               Partner With Us
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={`hover:text-blue-900 ${
                asPath === "/blog" ? "font-black text-black" : ""
              }`}
            >
               Blog
            </a>
          </Link>

          <div className="mt-0 sm:mt-0 sm:flex sm:justify-center lg:justify-start">
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

        </nav>
      </div>
    </header>
  );
};

const Footer = () => (

  <FooterForm></FooterForm>

);

const Links = ({ names }) => (
  <nav className="mb-10 list-none">
    {names.map((name) => (
      <li key={name}>
        <a className="text-gray-600 hover:text-gray-800">{name}</a>
      </li>
    ))}
  </nav>
);

export default Layout;
