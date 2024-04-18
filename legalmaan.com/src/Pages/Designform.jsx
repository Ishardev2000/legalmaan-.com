import React from "react";

function Designform() {
  return (
    <>
       <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.istockphoto.com/id/1352130435/photo/copyright-concept-author-rights-intellectual-property.jpg?s=612x612&w=0&k=20&c=qbFJVlJ5zTGT6BX2XESeXXRYdvMtRwkt6N2rbQsLOHQ="
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-5xl py-10 font-bold text-gray-100 text-center font-serif">
          DESIGN PATENT FORM PAGE
          </h2>
          <span className="h-1 w-36  bg-gray-100"> 
              </span>
          {/* <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a> */}
        </div>
      </div>
      











    </>
  );
}

export default Designform;
