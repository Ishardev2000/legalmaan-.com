import React from 'react'

function Home() {
  return (
    <>
      {/* this is the Home page header */}
      <section className=' bg-gray-200 py-8'>
        <div className="container mx-auto bg-gray-200 flex px-10 py-19 md:flex-row flex-col items-center">
          <div
            className="ml-15 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-20 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-15 font-medium text-gray-900 ">Hey, I'm Yamman
            </h1>
            <h1 className="mt-12 leading-relaxed title-font sm:text-4xl text-3xl mb-15 font-bold text-gray-900 ">Legally Protect YOU and Your BUSINESS</h1>
            <div className="flex justify-center">
              <button src="contect" type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-9 rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black dark:hover:bg-gray-400 hover:text-black dark:focus:ring-blue-800">Contact Now</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center mb-15 rounded" alt="hero" src="https://legalmaan.com/wp-content/uploads/2023/06/YAMMAN-WIBSITE-IMAGE-01-1105x1536.png" />
          </div>
        </div>

      </section>

      {/* this is the Home page simple content */}
      <section className='py-25 mt-20  bg-gray-200'>
        <div className="flex flex-col bg-gray-200 items-center text-center justify-center h-screen p-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 underline-offset-1 decoration-black">Who I AM?</h1>
          <p className="text-gray-600 text-lg mb-8">I have studied law at one of the prestigious law colleges & have always been passionate about drafting legal documents.The online world has helped me put my knowledge & passion into practice by letting me draft over 1000+ international legal documents for clients worldwide in different legal domains. I listen closely to your problems and use my expertise to solve your legal issues by providing legal writing and consultation services. Until Now, I have legally protected 35 businesses by registering their trademarks and drafting contracts, advising many individuals regarding litigations, and helping several students by writing legal articles and essays.Do you need help with any legal issues?</p>
          <br />  <b> Connect to Protect Yourself and Your Business! </b>
          <div className="flex space-x-4">
            <button src="contect" type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-9 rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black dark:hover:bg-gray-400 hover:text-black dark:focus:ring-blue-800">Contact Now</button>
          </div>
        </div>
      </section>



      {/* section Cards  */}
      <section className='py-25 mt-20  bg-gray-200'>

        <div className="bg-gray-200  px-10 py-10">

          <div id="features" className="mx-auto  max-w-6xl">
            {/* <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p> */}
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              What Services I'm Providing
            </h2>
            <ul className="mt-20 grid gap-y-28	 grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">

              <li className="rounded-xl bg-white px-8 py-12 shadow-sm">
                <a href="#" className="group">
                  <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-20 w-20" />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TradeMark Attorney
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus consequuntur accusamus, aut atque nisi modi optio ea, eveniet alias porro facere voluptatem id. Reiciendis amet blanditiis, nulla eos optio deleniti deserunt tenetur qui possimus nisi quisquam odit laboriosam.</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ9QLI9GEl_HghDDM3WfeC0MMnzWvW9qeq-S4UImCiQ&s" alt="" className="mx-auto mt-5 h-10 w-10" />
                </a>
              </li>

              <li className="rounded-xl bg-white px-8 py-12 shadow-sm">
                <a href="#" className="group">
                  <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-20 w-20" />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TradeMark Attorney
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus consequuntur accusamus, aut atque nisi modi optio ea, eveniet alias porro facere voluptatem id. Reiciendis amet blanditiis, nulla eos optio deleniti deserunt tenetur qui possimus nisi quisquam odit laboriosam.</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ9QLI9GEl_HghDDM3WfeC0MMnzWvW9qeq-S4UImCiQ&s" alt="" className="mx-auto mt-5 h-10 w-10" />
                </a>
              </li>

              <li className="rounded-xl bg-white px-8 py-12 shadow-sm">
                <a href="#" className="group">
                  <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-20 w-20" />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TradeMark Attorney
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus consequuntur accusamus, aut atque nisi modi optio ea, eveniet alias porro facere voluptatem id. Reiciendis amet blanditiis, nulla eos optio deleniti deserunt tenetur qui possimus nisi quisquam odit laboriosam.</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ9QLI9GEl_HghDDM3WfeC0MMnzWvW9qeq-S4UImCiQ&s" alt="" className="mx-auto mt-5 h-10 w-10" />
                </a>
              </li>

              <li className="rounded-xl bg-white px-8 py-12 shadow-sm">
                <a href="#" className="group">
                  <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-20 w-20" />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TradeMark Attorney
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus consequuntur accusamus, aut atque nisi modi optio ea, eveniet alias porro facere voluptatem id. Reiciendis amet blanditiis, nulla eos optio deleniti deserunt tenetur qui possimus nisi quisquam odit laboriosam.</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ9QLI9GEl_HghDDM3WfeC0MMnzWvW9qeq-S4UImCiQ&s" alt="" className="mx-auto mt-5 h-10 w-10" />
                </a>
              </li>


              <li className="rounded-xl bg-white px-8 py-12 shadow-sm">
                <a href="#" className="group">
                  <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-20 w-20" />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TradeMark Attorney
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus consequuntur accusamus, aut atque nisi modi optio ea, eveniet alias porro facere voluptatem id. Reiciendis amet blanditiis, nulla eos optio deleniti deserunt tenetur qui possimus nisi quisquam odit laboriosam.</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ9QLI9GEl_HghDDM3WfeC0MMnzWvW9qeq-S4UImCiQ&s" alt="" className="mx-auto mt-5 h-10 w-10" />
                </a>
              </li>


              <li className="rounded-xl bg-white px-8 py-12 shadow-sm">
                <a href="#" className="group">
                  <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-20 w-20" />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TradeMark Attorney
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus consequuntur accusamus, aut atque nisi modi optio ea, eveniet alias porro facere voluptatem id. Reiciendis amet blanditiis, nulla eos optio deleniti deserunt tenetur qui possimus nisi quisquam odit laboriosam.</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ9QLI9GEl_HghDDM3WfeC0MMnzWvW9qeq-S4UImCiQ&s" alt="" className="mx-auto mt-5 h-10 w-10" />
                </a>
              </li>

            </ul>
          </div>

        </div>

      </section>





      {/*  Portfolio section  */}
      <section className='py-25 mt-20  bg-gray-200'>

       
        {/* <div className="bg-white dark:bg-gray-300 h-screen py-6 sm:py-8 lg:py-12"> */}
        <div className="bg-gray-200  px-10 py-10">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold  text-gray-800 lg:text-3xl dark:text-black">My Portfolio</h2>

                {/* <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-900 md:block">
                  This is a section of some simple filler text,
                  also known as placeholder text. It shares some characteristics of a real written text.
                </p> */}
              </div>

              <a href="#"
                className="inline-block rounded-lg border bg-white dark:bg-gray-900 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-400 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 hover:text-black focus-visible:ring active:bg-gray-100 md:px-8 md:py-3 md:text-base">
                More
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {/*  image - start  */}
              <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span> */}
              </a>
              {/*  image - end 

               image - start */}
              <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span> */}
              </a>
              {/*  image - end  */}

              {/*  image - start  */}
              <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
                {/* 
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span> */}
              </a>
              {/* <!-- image - end -->

              <!-- image - start --> */}
              <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span> */}
              </a>
              {/* image - end  */}
            </div>
          </div>
        </div>

      </section>

      

      <section className='py-12 mt-10 bg-gray-100'>
  <div className="container mx-auto px-20">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
      {/* Client Testimonials */}
     

      <div className="bg-white rounded-3xl h-72 w-80 shadow-lg p-14">
        <p className="text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum eos quos soluta dignissimos unde. Eveniet sit nam quia quaerat consectetur dignissimos.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Client Name</h3>
      </div>

      <div className="bg-white rounded-3xl h-72 w-80 shadow-lg p-14">
        <p className="text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum eos quos soluta dignissimos unde. Eveniet sit nam quia quaerat consectetur dignissimos.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Client Name</h3>
      </div>

      <div className="bg-white rounded-3xl h-72 w-80 shadow-lg p-14">
        <p className="text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum eos quos soluta dignissimos unde. Eveniet sit nam quia quaerat consectetur dignissimos.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Client Name</h3>
      </div>

      <div className="bg-white rounded-3xl h-72 w-80 shadow-lg p-14">
        <p className="text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum eos quos soluta dignissimos unde. Eveniet sit nam quia quaerat consectetur dignissimos.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Client Name</h3>
      </div>

      <div className="bg-white rounded-3xl h-72 w-80 shadow-lg p-14">
        <p className="text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum eos quos soluta dignissimos unde. Eveniet sit nam quia quaerat consectetur dignissimos.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Client Name</h3>
      </div>

      <div className="bg-white rounded-3xl h-72 w-80 shadow-lg p-14">
        <p className="text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum eos quos soluta dignissimos unde. Eveniet sit nam quia quaerat consectetur dignissimos.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Client Name</h3>
      </div>

    </div>
  </div>
</section>

    </>
  )
}

export default Home