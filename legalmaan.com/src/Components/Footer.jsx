import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <section className='bg-gray-400 p-4'>

        <footer className="flex flex-col space-y-5 justify-center">

          <nav className="flex justify-center flex-wrap gap-6 text-gray-900 font-medium">
            <Link className="hover:text-gray-100" to="Home">Home</Link>
            <Link className="hover:text-gray-100" to="about">About</Link>
            <Link className="hover:text-gray-100" to="portfolio">Portfolio</Link>
            <Link className="hover:text-gray-100" to="design">Designform</Link>
            <Link className="hover:text-gray-100" to="form">TMform</Link>
            <Link className="hover:text-gray-100" to="contect">Contect</Link>
          </nav>

          <div className="flex justify-center space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a> */}
          </div>
          <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
        </footer>
      </section>
    </>
  )
}

export default Footer