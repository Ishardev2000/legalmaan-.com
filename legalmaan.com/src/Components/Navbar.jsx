

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to manage navbar visibility on small screens
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // Toggle visibility
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-400">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
            <img src="https://www.shutterstock.com/image-vector/vector-logo-letter-m-260nw-491733976.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Muhammad Ishar</span>
        </Link>
        <div className="flex md:order-2">
            <button src="contect" type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black dark:hover:bg-gray-400 hover:text-black dark:focus:ring-blue-800">Contact Now</button>
            <button data-collapse-toggle="navbar-cta " type="button" className="inline-flex items-center p-2 text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
            bg-black
            focus:ring-gray-200 dark:text-gray-100 
            hover:text-black
            dark:hover:bg-gray-400 dark:focus:ring-gray-600" aria-controls=" navbar-cta" aria-expanded="false" onClick={toggleNavbar}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
        <div className={`${isNavbarVisible ? 'flex' : 'hidden'} flex-col mt-4 md:flex md:flex-row md:mt-0 md:text-sm md:font-medium w-full md:w-auto`} id="navbar-cta">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-400">
            <li><Link to="home" className="text-lg block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-black" aria-current="page">Home</Link></li>
            <li><Link to="about" className=" text-lg  block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-black">About</Link></li>
            <li><Link to="portfolio" className=" text-lg  block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-black">Portfolio</Link></li>
            <li><Link to="form" className=" text-lg  block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-black">TM Form</Link></li>
            <li><Link to="contect" className=" text-lg  block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-black">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


