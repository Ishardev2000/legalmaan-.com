import React from "react";

function About() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://t4.ftcdn.net/jpg/05/18/77/63/360_F_518776302_XZQkgR5kuSZyuchfvOT2jT0dhvj3E7BB.jpg"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h2 className="text-5xl py-10 font-bold text-gray-100 text-center font-serif ">
              ABOUT PAGE 
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
      <br />
      <div className="bg-[#fefafa] border-b">
        <div className="py-8 px-6 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-5xl py-10 font-bold text-gray-800 text-center font-serif mb-8">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-3 sm:mt-6 text-md sm:text-lg sm:leading-snug   text-gray-800 dark:text-gray-900">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit laboriosam rem aperiam sint consequatur, perferendis distinctio ipsum temporibus deserunt, assumenda amet laborum <br /> pariatur dolores qui! Soluta, modi. Accusantium dolorem itaque neque! Vero natus nisi aut, sed non tempore qui voluptas expedita deserunt temporibus labore ex doloribus recusandae? Perspiciatis, iste.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugit perspiciatis explicabo 
             <br />
              voluptatum animi atque, tempora unde sequi quo culpa enim eveniet incidunt voluptatem voluptates quos nam? Ea, impedit eaque?Lorem ipsum <br /> dolor sit amet consectetur adipisicing elit.  Sit corporis ex, amet aspernatur reiciendis mollitia <br /> totam dolorem ad cumque culpa! Blanditiis iste quibusdam iusto <br /> <br /> tenetur ea itaque odit consequatur reprehenderit.
            </p>
            <div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-6">
              <a
                className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] text-sm py-6 px-8"
                href=""
              >
                <b>More About Me</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
