import React from "react";


const page = () => {
  return (
    <div className="bg-white">
      <img
        src="https://www.parallelwireless.com/wp-content/uploads/blog-hero.jpg"
        alt=""
        className="w-screen h-74"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[394px]">
        <span className="text-black">WHITE PAPERS</span>
      </h1>

      <div className="flex flex-row gap-12 justify-center  w-screen bg-gray-200 pt-1 pb-1">
        <a
          href="/white_papers"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-sm  text-center flex justify-center items-center"
        >
          WHITE PAPERS
        </a>
        <a
          href="/solution_overview"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-sm text-center flex justify-center items-center"
        >
          SOLUTION OVERVIEW
        </a>
        <a
          href="/videos"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-sm  text-center flex justify-center items-center"
        >
          VIDEOS
        </a>
        <a
          href="/blog"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-sm w-24  text-center flex justify-center items-center"
        >
          BLOG
        </a>
        <a
          href="/case_studies"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-sm  text-center flex justify-center items-center"
        >
          CASE STUDIES
        </a>
        <a
          href="/webinars"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-sm  text-center flex justify-center items-center"
        >
          WEBINARS
        </a>
        <a
          href="/open_ran"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-sm w-20 text-center flex justify-center items-center"
        >
          OPENRAN
        </a>
      </div>

      {/* 1 */}
      <div className="flex flex-wrap gap-14 justify-center flex-row p-20">
        <div className="relative h-64 w-72 bg-gray-200 overflow-hidden border-b-8 border-orange-500">
          {/* <!-- Original content --> */}
          <div className="h-full transition-transform duration-500 ease-in-out transform hover:-translate-y-full">
            <h1 className="text-center text-black text-2xl flex justify-center items-center mt-14 p-6">
              5G NR Logical <br />
              Architecture and its Functionality Splits
              <br />
              PDF
            </h1>
          </div>
          {/* <!-- New layer on hover --> */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100">
            <h1 className="text-center text-white font-bold text-2xl flex justify-center items-center mt-20 p-6">
              <a href="" className="font-bold">
                Download →
              </a>
            </h1>
          </div>
        </div>
        {/* 2 */}

        <div className="relative h-64 w-72 bg-gray-200 overflow-hidden border-b-8 border-orange-500">
          {/* <!-- Original content --> */}
          <div className="h-full transition-transform duration-500 ease-in-out transform hover:-translate-y-full">
            <h1 className="text-center text-black text-2xl flex justify-center items-center mt-14 p-6">
              Tackling Network Densification Challenges for 5G PDF
            </h1>
          </div>
          {/* <!-- New layer on hover --> */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100">
            <h1 className="text-center text-white font-bold text-2xl flex justify-center items-center mt-20 p-6">
              <a href="" className="font-bold">
                Download →
              </a>
            </h1>
          </div>
        </div>
        {/* 3 */}
        <div className="relative h-64 w-72 bg-gray-200 overflow-hidden border-b-8 border-orange-500">
          {/* <!-- Original content --> */}
          <div className="h-full transition-transform duration-500 ease-in-out transform hover:-translate-y-full">
            <h1 className="text-center text-black text-2xl flex justify-center items-center mt-14 p-6">
              Open RAN Integration: Run With It PDF
            </h1>
          </div>
          {/* <!-- New layer on hover --> */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100">
            <h1 className="text-center text-white font-bold text-2xl flex justify-center items-center mt-20 p-6">
              <a href="" className="font-bold">
                Download →
              </a>
            </h1>
          </div>
        </div>
        {/* 4 */}
        <div className="relative h-64 w-72 bg-gray-200 overflow-hidden border-b-8 border-orange-500">
          {/* <!-- Original content --> */}
          <div className="h-full transition-transform duration-500 ease-in-out transform hover:-translate-y-full">
            <h1 className="text-center text-black text-2xl flex justify-center items-center mt-8 p-6">
              Parallel Wireless Creates OpenRAN "ALL G" Radio Access Network
              Architecture <br />
               PDF
            </h1>
          </div>
          {/* <!-- New layer on hover --> */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100">
            <h1 className="text-center text-white font-bold text-2xl flex justify-center items-center mt-20 p-6">
              <a href="" className="font-bold">
                Download →
              </a>
            </h1>
          </div>
        </div>
        {/* 5 */}
        <div className="relative h-64 w-72 bg-gray-200 overflow-hidden border-b-8 border-orange-500">
          {/* <!-- Original content --> */}
          <div className="h-full transition-transform duration-500 ease-in-out transform hover:-translate-y-full">
            <h1 className="text-center text-black text-2xl flex justify-center items-center mt-14 p-6">
              Cloud Native Applications 101 <br /> PDF
            </h1>
          </div>
          {/* <!-- New layer on hover --> */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100">
            <h1 className="text-center text-white font-bold text-2xl flex justify-center items-center mt-20 p-6">
              <a href="" className="font-bold">
                Download →
              </a>
            </h1>
          </div>
        </div>
        {/* 5 */}
        <div className="relative h-64 w-72 bg-gray-200 overflow-hidden border-b-8 border-orange-500">
          {/* <!-- Original content --> */}
          <div className="h-full transition-transform duration-500 ease-in-out transform hover:-translate-y-full">
            <h1 className="text-center text-black text-2xl flex justify-center items-center mt-14 p-6">
              5G Functional Splits <br /> PDF
            </h1>
          </div>
          {/* <!-- New layer on hover --> */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100">
            <h1 className="text-center text-white font-bold text-2xl flex justify-center items-center mt-20 p-6">
              <a href="" className="font-bold">
                Download →
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
