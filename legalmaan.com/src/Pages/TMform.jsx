import React from "react";

function TMform() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Trade Mark Registration Form.
          </h1>
        </div>
      </div>

      {/* forms */}

      <div class="bg-white rounded-lg  relative m-10">
        <div class="flex items-start justify-between p-5 border-b rounded-t">
          <h3 class="text-xl font-semibold">ETrade Mark Registration Form.</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-6">
          <form action="#">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  class="shadow-sm bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full py-4 mb-6 placeholder:text-gray-700 pl-8 placeholder:text-base"
                  placeholder=" Enter Your frist name"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="list-name"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  <b>List Name</b>
                </label>
                <input
                  type="text"
                  name="list-name"
                  id="list-name"
                  class="shadow-sm bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full py-4 mb-6  placeholder:text-gray-700 pl-8 placeholder:text-base"
                  placeholder="Enter Your last name"
                  required=""
                />
              </div>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="phone-number"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                <b>Contact Number</b>
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                class="shadow-sm bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full py-4 mb-6 placeholder:text-gray-700 pl-8 placeholder:text-base"
                placeholder="+922222222222"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="email"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                <b>You Email</b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="shadow-sm bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full py-4 mb-6  pl-8 placeholder:text-gray-700  placeholder:text-base"
                placeholder="isharkhan601@gmail.com"
                required=""
              />
            </div>
          </form>

          <fieldset>
            {/* <legend class="sr-only"></legend> */}
            <b>
              <h1 class="flex items-center my-6">Which option best describes your trademark?</h1>
            </b>
            <div class="flex items-center mb-4">
              <input
                id="country-option-2"
                type="radio"
                name="countries"
                value="Germany"
                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300  dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="country-option-2"
                class="block ms-2 text-sm font-medium text-gray-900"
              >
                Logomark (Brand Logo or Graphics)
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                id="country-option-3"
                type="radio"
                name="countries"
                value="Spain"
                class="w-4 h-4 border-gray-300 focus:ring-2   dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="country-option-3"
                class="block ms-2 text-sm font-medium text-gray-900 "
              >
                Wordmark (Brand Name or slogan in text)
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="countries"
                value="United Kingdom"
                class="w-4 h-4 border-gray-300 focus:ring-2  dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="country-option-4"
                class="block ms-2 text-sm font-medium text-gray-900 "
              >
                Logo and Brand name combined
              </label>
            </div>
          </fieldset>
        </div>

        <div class="p-6 border-t border-gray-200 rounded-b">
          <button
            class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Save all
          </button>
        </div>
      </div>
    </>
  );
}

export default TMform;
