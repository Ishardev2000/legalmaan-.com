import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="bg-gray-900 p-4">
      <footer className="  flex justify-between flex-row  ">
        <nav className="flex flex-wrap justify-start space-x-4 p-8 text-gray-100 font-medium">
          <Link className="hover:text-gray-400" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-400" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-400" to="/portfolio">
            Portfolio
          </Link>
          <Link className="hover:text-gray-400" to="/design">
            Designform
          </Link>
          <Link className="hover:text-gray-400" to="/form">
            TMform
          </Link>
          <Link className="hover:text-gray-400" to="/contact">
            Contact
          </Link>
        </nav>

        <div className="inline-flex  justify-end p-6 space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
              alt="Messenger"
            />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
        </a> */}
        </div>
      </footer>
      <p className="flex justify-center p-6 text-center text-gray-300 font-medium">
        {" "}
        <b>&copy; 2022 Company Ltd. All rights reserved.</b>
      </p>
    </section>
  );
}

export default Footer;
