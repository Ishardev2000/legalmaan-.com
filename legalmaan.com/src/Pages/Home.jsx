import React from "react";
import Card from "../Cardscomponents/Card";
import Clientscard from "../Cardscomponents/Clientscard";
import Btn from "../Cardscomponents/Btn";
function Home() {
  return (
    <>
      {/* this is the Home page header */}
      <section className="bg-[#fefafa]">
        <section className=" bg-[#fefafa] py-8">
          <div className="container mx-auto  flex px-10 py-19 md:flex-row flex-col items-center">
            <div className="ml-15 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-20 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-7xl mb-15 font-bold font-serif text-gray-900 ">
                <b> Hey, I'm Yamman </b>
              </h1>

              <h3 className="mt-12 leading-relaxed title-font sm:text-4xl font-medium text-3xl mb-15  text-gray-900 ">
                Legally Protect YOU and Your BUSINESS
              </h3>
              <div className="flex ">
                {/* Import btn */}
                <Btn btnText={"Contect Me"} />
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center mb-15 rounded"
                alt="hero"
                src="https://legalmaan.com/wp-content/uploads/2023/06/YAMMAN-WIBSITE-IMAGE-01-1105x1536.png"
              />
            </div>
          </div>
        </section>

        {/* this is the Home page simple content */}
        <section className="py-25 mt-20">
          <div className="flex flex-col items-center text-center justify-center h-screen p-20">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 underline-offset-1 decoration-black font-serif">
              Who I AM?
            </h1>
            <span className="h-1 w-36 mb-10 bg-gray-900"></span>
            <p className="text-gray-700 text-lg mb-10">
              I have studied law at one of the prestigious law colleges & have
              always been passionate about drafting legal documents.The online
              world has helped me put my knowledge & passion into practice by
              letting me draft over 1000+ international legal documents for
              clients worldwide in different legal domains. I listen closely to
              your problems and use my expertise to solve your legal issues by
              providing legal writing and consultation services. Until Now, I
              have legally protected 35 businesses by registering their
              trademarks and drafting contracts, advising many individuals
              regarding litigations, and helping several students by writing
              legal articles and essays.Do you need help with any legal issues?
            </p>
            <br /> <b> Connect to Protect Yourself and Your Business! </b>
            <div className="flex justify-center">
              <Btn btnText={"Contect Me"} />
            </div>
          </div>
        </section>

        {/* section Cards  */}
        <section className="py-25 mt-20">
          <div className="px-10 py-10">
            <div id="features" className="mx-auto  max-w-6xl">
              {/* <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p> */}
              <h2 className="text-center font-display font-bold tracking-tight text-slate-900 font-serif md:text-5xl">
                What Services I'm Providing
              </h2>

              <ul className="mt-20 grid gap-y-28	 grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                {/* addd cards */}
                <Card username={"Yamman Muhammad"} />
                <Card username={"Yamman Muhammad"} />
                <Card username={"Yamman Muhammad"} />
                <Card username={"Yamman Muhammad"} />
                <Card username={"Yamman Muhammad"} />
                <Card username={"Yamman Muhammad"} />
              </ul>
            </div>
          </div>
        </section>

        {/*  Portfolio section  */}
        <section className="py-25 mt-20">
          {/* <div className="bg-white dark:bg-gray-300 h-screen py-6 sm:py-8 lg:py-12"> */}
          <div className="px-10 py-10">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold  text-gray-800 lg:text-3xl font-serif dark:text-black">
                    My Portfolio
                  </h2>

                  {/* <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-900 md:block">
                  This is a section of some simple filler text,
                  also known as placeholder text. It shares some characteristics of a real written text.
                </p> */}
                </div>

                <a
                  href="#"
                  className="inline-block rounded-lg border bg-white dark:bg-gray-900 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-400 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 hover:text-black focus-visible:ring active:bg-gray-100 md:px-8 md:py-3 md:text-base"
                >
                  More
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                {/*  image - start  */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span> */}
                </a>
                {/*  image - end 

               image - start */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span> */}
                </a>
                {/*  image - end  */}

                {/*  image - start  */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  {/* 
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span> */}
                </a>
                {/* <!-- image - end -->

              <!-- image - start --> */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span> */}
                </a>
                {/* image - end  */}
              </div>
            </div>
          </div>
        </section>

        {/* What Our Clients  cards*/}
        <section className="py-32 -mt-24 ">
          <div className="container   mx-auto px-20">
            <h2 className="text-5xl py-10 font-bold text-gray-800 text-center font-serif mb-8">
              What Our Clients Say
            </h2>
            <div className="grid items-center md:grid-cols-3 gap-8 justify-center">
              {/* addd cards */}
              <Clientscard clintName={"Maan Khan"} />
              <Clientscard clintName={"Maan Khan"} />
              <Clientscard clintName={"Maan Khan"} />
              <Clientscard clintName={"Maan Khan"} />
              <Clientscard clintName={"Maan Khan"} />
              <Clientscard clintName={"Maan Khan"} />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
