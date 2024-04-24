import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import GoogleMap from "../Cardscomponents/Msp";
function Contect() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.shutterstock.com/image-photo/retro-old-telephone-on-table-600nw-194333306.jpg"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-5xl py-10 font-bold text-gray-100 text-center font-serif ">
            CONTACT PAGE
          </h2>
          <span className="h-1 w-36  bg-gray-100"></span>
        </div>
      </div>

      {/* Contact section */}

      <section className="bg-[#fef9f9] py-10 md:py-40">
        <div className="w-screen flex flex-wrap justify-center items-center pt-6">
          <div className="flex flex-col shadow-lg rounded-lg mx-4 md:mx-auto bg-white px-10 md:px-20 py-4 md:py-2 w-full md:w-auto">
            <div className="flex flex-col items-center">
              <FcPhoneAndroid className="h-10 mb-6 rounded w-36" />
              <h3 className="text-lg mb-3 font-bold">+923085416759</h3>
              <p className="tracking-wider mb-3">
                Monday - Saturday from 9am - 10pm
              </p>
            </div>
          </div>
          <div className="flex flex-col shadow-lg rounded-lg mx-4 md:mx-auto bg-white px-10 md:px-20 py-4 md:py-2 w-full md:w-auto sm:mt-4 md:mt-0">
            <div className="flex flex-col items-center">
              <FcAddressBook className="h-10 mb-6 rounded w-36" />
              <h3 className="text-lg mb-3 font-bold">
                yammanmuhammad5@gmail.com
              </h3>
              <p className="tracking-wider mb-3">Contact me any time!</p>
            </div>
          </div>
        </div>
        <section className="py-6 dark:text-gray-900">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 py-20 md:grid-cols-2 md:divide-x">
            <form
              noValidate=""
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            >
              <div className="mb-5">
                <label
                  htmlFor=""
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  <b>Full Name</b>
                </label>
                <input
                  type="fullname"
                  name="fullname"
                  id="fullnamel"
                  placeholder="Enter your Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor=""
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  <b>Email *</b>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter emal adress"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </label>
              <button
                type="button"
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
              >
                Submit
              </button>
            </form>
            <div className=""> 
            <GoogleMap />
            </div>
          </div>
        </section>
      </section>

      <br />
    </>
  );
}
export default Contect;
