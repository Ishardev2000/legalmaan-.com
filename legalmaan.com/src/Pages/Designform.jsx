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
          <span className="h-1 w-36  bg-gray-100"></span>
        </div>
      </div>

      <section className="bg-[#fefafa] lg-p-20 md:p-15 sm:p-28">
        <div className="bg-[#ffffff] md:p-16 lg-p-24 sm:p-5">
          <div className="p-6 space-y-6">
            <form action="#">
              <h2 className="text-center mb-20 font-display font-bold tracking-tight text-slate-900 font-serif md:text-5xl">
                DESIGN PATENT FILING INFORMATION FORM
              </h2>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phone-number"
                  className="text-base font-medium text-gray-900 block mb-3"
                >
                  <b>Who will own this Design? *</b>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                  placeholder=""
                  required=""
                />
                <p className="mb-5 ">
                  Individual (s) or a business entity may own a design. If an
                  individual, name of the individual. If an entity, name of the
                  entity, type of the entity, i.e., LLC, Corp., Private Limited
                  Company, LP, Partnership etc.
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 block mb-2"
                >
                  <b>
                    If owner is an entity (business) location of the business
                    entity Please provide State or
                    Country/Region/Jurisdiction/Territory <br /> Where Legally
                    Organized *
                  </b>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-5 focus:border-[#6A64F1] focus:shadow-md"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 block mb-2"
                >
                  <b>
                    Residential Address/Business Address * Give the address in
                    which you would like to receive the certificate and other
                    official <br /> documentation. *
                  </b>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-5 focus:border-[#6A64F1] focus:shadow-md"
                  placeholder=""
                  required=""
                />
              </div>
            </form>

            <div className="mb-5">
              <label
                for=""
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                <h1>
                  <b>Address</b>
                </h1>
              </label>
            </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <input
                  type="text"
                  name=""
                  id=""
                  className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                  placeholder=""
                  required=""
                />
                Address Line 1
              </div>
              <br />
              <div className="col-span-6 sm:col-span-3">
                <input
                  type="text"
                  name=""
                  id=""
                  className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                  placeholder=""
                  required=""
                />
                Address Line 2
              </div>

              <br />

              <div className=" sm:col-span-3 grid grid-cols-8">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                    placeholder=""
                    required=""
                  />
                  City
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3 grid grid-cols-8  gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                    placeholder=""
                    required=""
                  />
                  State / Province / Region
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3 grid grid-cols-8  gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                    placeholder=""
                    required=""
                  />
                  Postal Code
                </div>
              </div>

              <div className="col-span-6 w-96 sm:col-span-3 grid grid-cols-8  gap-6">
                <div className="col-span-8  sm:col-span-3">
                  <select className=" rounded-md border border-[#e0e0e0] bg-white  py-3 px-12 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md">
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                    <option value="swabi"> Select Country name</option>
                  </select>
                  Country
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                for=""
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                <b>Phone</b>
              </label>
              <input
                type="tle"
                name=""
                id=""
                placeholder="033333333333333"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for=""
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                <b>Email *</b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="isharkhan601@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="text-base font-medium text-gray-900 block mb-3"
              >
                <b>
                  Name and Position of the person who will sign the
                  authorization. *
                </b>
              </label>
              <input
                type="text"
                name=""
                id=""
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                placeholder=""
                required=""
              />
              <p className="mb-5 ">
                If the owner is a company, must be a person in the senior
                management or owner of the company. If the owner is an
                individual, please enter full name of the person.
              </p>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="text-base font-medium text-gray-900 block mb-3"
              >
                <b>What is the title(name) of the design? *</b>
              </label>
              <input
                type="text"
                name=""
                id=""
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                placeholder=""
                required=""
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="text-base font-medium text-gray-900 block mb-3"
              >
                <b>Give a general description of the design. *</b>
              </label>
              <input
                type="text"
                name=""
                id=""
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-10 focus:border-[#6A64F1] focus:shadow-md"
                placeholder=""
                required=""
              />
            </div>

            <b className="font-mono text-3xl text-[#002d5b] mb-10">
              Please attach seven pictures of the <br /> Design from seven
              angles as given <br /> below.{" "}
            </b>

            <img
              src="https://legalmaan.com/wp-content/uploads/2023/08/Screenshot-2023-02-13-at-11.21.44-AM-jpg.webp"
              alt=""
            />

            <div className="mb-6 ">
              <label className=" block text-xl font-semibold text-[#07074D]">
                Drag & Drop or Upload 7 photos.
              </label>

              <div className="mb-8">
                <input type="file" name="file" id="file" className="sr-only" />
                <label
                  for="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0]  text-center"
                >
                  <div>
                    <span className="mb-2 block text-base  font-semibold text-[#07074D]">
                      Click or drag files to this area to upload
                    </span>
                    <span className="mb-2 block text-xs font-medium text-[#6B7280]">
                      You can upload up to 7 files.
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Click Me
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="text-base font-medium text-gray-900 block mb-3"
              >
                <b>Who is the designer (inventor) of the design? *</b>
              </label>
              <input
                type="text"
                name=""
                id=""
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                placeholder=""
                required=""
              />
              <p className="mb-5 ">
                Designer (inventor) must be a person. It cannot be a company or
                legal entity (like partnerships).
              </p>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="text-base font-medium text-gray-900 block mb-3"
              >
                <b>
                  What is the relationship between the designer (inventor) and
                  the owner of the design? *
                </b>
              </label>
              <input
                type="text"
                name=""
                id=""
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none mb-2 focus:border-[#6A64F1] focus:shadow-md"
                placeholder=""
                required=""
              />
              <p className="mb-5 ">
                If designer (inventor) and owner are different, please mention
                the relationship between both.
              </p>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="text-base font-medium text-gray-900 block mb-3"
              >
                <b>
                  Have you filed a foreign application for the same mark in the
                  last 6 months? If yes, please provide the serial or
                  registration number and any documentation you have regarding
                  the foreign mark.
                </b>
              </label>
              <input
                type="text"
                name=""
                id=""
                className="  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder=""
                required=""
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Designform;
