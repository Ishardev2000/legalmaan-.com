import React from "react";

function TMform() {
  return (
    <>
    {/* TM form */}
    <section className="bg-[#fefafa]">
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://oly.com.pk/wp-content/uploads/2018/10/1518676507_992.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Trade Mark Registration Form.
          </h1>
          <span className="h-1 w-44 mt-6 bg-gray-100"></span>
        </div>
      </div>

      {/* forms */}

      <div className="bg-[#fefafa] rounded-lg  relative m-20">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">
            ETrade Mark Registration Form.
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="text-sm font-medium text-gray-900 block mb-5"
                >
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-5 focus:border-[#6A64F1] focus:shadow-md"
                  placeholder=" Enter Your frist name"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="list-name"
                  className="text-sm font-medium text-gray-900 block mb-5"
                >
                  <b>List Name</b>
                </label>
                <input
                  type="text"
                  name="list-name"
                  id="list-name"
                  className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-5 focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="Enter Your last name"
                  required=""
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="text-sm font-medium text-gray-900 block mb-5"
              >
                <b>Contact Number</b>
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-5 focus:border-[#6A64F1] focus:shadow-md"
                placeholder="+922222222222"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-5"
              >
                <b>You Email</b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-5 focus:border-[#6A64F1] focus:shadow-md"
                placeholder="isharkhan601@gmail.com"
                required=""
              />
            </div>
          </form>
          <b>
            <h1 className="flex items-center my-6">
              Which option best describes your trademark?
            </h1>
          </b>
          <div>
            <label className="flex  text-gray-900 rounded-md px-3 py-2 my-3 cursor-pointer ">
              <input type="radio" name="Country" />
              <span className="pl-2">Logomark (Brand Logo or Graphics)</span>
            </label>

            <label className="flex  text-gray-900 rounded-md px-3 py-2 my-3  cursor-pointer ">
              <input type="radio" name="Country" />
              <span className="pl-2">
                Wordmark (Brand Name or slogan in text)
              </span>
            </label>

            <label className="flex  text-gray-900 rounded-md px-3 py-2 my-3 cursor-pointer ">
              <input type="radio" name="Country" />
              <span className="pl-2">Logo and Brand name combined</span>
            </label>
          </div>
          <div className="mb-5">
            <label
              for=""
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name of Trademark (Brand Name) *
            </label>
            <input
              type="text"
              name="Brand Name"
              id="Brand Name"
              placeholder="Brand Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-6 ">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload Logo
            </label>

            <div className="mb-8">
              <input type="file" name="file" id="file" className="sr-only" />
              <label
                for="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0]  text-center"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop Logo files here
                  </span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">
                    In
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Click
                  </span>
                </div>
              </label>
            </div>

            <b>
              <h1 className="flex items-center my-6">
                Please select the entity type which best explains the owner. If
                your entity type is not one of the options please select "Other"{" "}
                <br />
                and provide your entity type
              </h1>
            </b>

            <div>
              <label className="flex  text-gray-900 rounded-md px-3 py-2 my-3 cursor-pointer ">
                <input type="radio" name="Country" />
                <span className="pl-2">Individual Person</span>
              </label>

              <label className="flex  text-gray-900 rounded-md px-3 py-2 my-3  cursor-pointer ">
                <input type="radio" name="Country" />
                <span className="pl-2">Company</span>
              </label>

              <label className="flex  text-gray-900 rounded-md px-3 py-2 my-3 cursor-pointer ">
                <input type="radio" name="Country" />
                <span className="pl-2">Partnership</span>
              </label>

              <label className="flex  text-gray-900 rounded-md px-3 py-2 my-3 cursor-pointer ">
                <input type="radio" name="Country" />
                <span className="pl-2">Trust/NGO</span>
              </label>
              <label className="flex  text-gray-800 rounded-md px-3 py-2 my-3 cursor-pointer ">
                <input type="radio" name="Country" />
                <span className="pl-2">Other</span>
              </label>
            </div>
          </div>
          <div className="mb-5">
            <label
              for=""
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              <b>Name of the owner (Write your LLC name in case of LLC ) *</b>
            </label>
            <input
              type="text"
              name="LLC Name"
              id="LLC Name"
              placeholder="Name of The Owner (The name who will own this trade mark)"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for=""
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Please add the address of the owner.
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder=""
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          Address Line 1
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <input
                type="text"
                name="City"
                id="City"
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                placeholder=""
                required=""
              />
              City
            </div>
            <div className="col-span-6 sm:col-span-3">
              <select className=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md">
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
                <option value="swabi">Your City Name</option>
              </select>
              State
            </div>

            <div className="col-span-6 sm:col-span-3">
              <input
                type="zip"
                name="Zip"
                id="Zip"
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                placeholder=""
                required=""
              />
              Zip Code
            </div>
          </div>
          <div className="mb-5">
            <label
              for=""
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              <b>
                Name and Position of the person who will sign the authorization*
              </b>
            </label>
            <input
              type="text"
              name="authorization"
              id="authorization"
              placeholder="f the owner is a company, must be a person in the senior management or owner of the company."
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for=""
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              <b>What products or services do you sell under this brand?</b>
            </label>
            <input
              type="text"
              name="products"
              id="products"
              placeholder="Tell us about the products or services which you will sell under the brand name."
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <b>
            <h1 className="flex items-center my-6">
              Are you using this brand right now or you are planning to use it
              in future?
            </h1>
          </b>
          <label className="flex  text-gray-900 rounded-md px-3  cursor-pointer ">
            <input type="radio" name="Country" />
            <span className="pl-2">Yes</span>
          </label>
          <label className="flex  text-gray-900 rounded-md px-3   cursor-pointer ">
            <input type="radio" name="Country" />
            <span className="pl-2">No</span>
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Submit
          </button>
        </div>
      </div>
      </section>
    </>
  );
}

export default TMform;
