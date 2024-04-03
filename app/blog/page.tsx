import React from 'react'

const page = () => {
  return (
    <div className="bg-white mt-24">
      <div className=" w-screen bg-gray-200 text-black flex flex-row">
        <div className="w-1/2 p-14 flex flex-col">
          <p className="text lg">03.14.24</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <h1 className="font-bold text-4xl">Our Annual MWC Recap</h1>
          <p className="text-3xl mt-6">
            The Mobile World Congress in Barcelona is without a doubt the
            flagship event in our calendar, the…
          </p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="ml-[-90px]">
            <button className="flex  justify-start pl-[90px]  bg-opacity-50 hover:bg-opacity-75 text-white text-xl font-bold">
              <span className="bg-orange-500 text-white hover:bg-white-500 text-sm border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-bold py-2.5 px-4 mr-20 rounded-xl">
                Continue Reading
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center p-12 pt-8">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/WhatsApp-Image-2024-03-14-at-14.28.14.jpeg"
            alt=""
            className=" h-full w-full rounded-shadow"
          />
        </div>
      </div>

      <div className=" bg-white p-12">
        <h1 className="text-black text-ceneter flex justify-center items-center text-4xl p-4 font-bold">
          Most Recent Posts
        </h1>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white overflow-hidden">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/WhatsApp-Image-2024-01-02-at-15.36.11.jpeg"
              alt="Placeholder"
              className=" h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4 pl-4">
              <p className="text-xl text-black">01.08.24</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-2xl text-black font-semibold mb-2">
                5 Cellular Network Trends to Look Out for in 2024
              </h3>
              <p className="text-gray-700 text-lg">
                Another year has gone by and even though the mobile telecoms
                industry is over 30 years old,…
              </p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <p className="text-2xl text-orange-500 font-bold pt-8 hover:underline hover:text-orange-300">
                {" "}
                Read more →
              </p>
            </div>
          </div>
          <div className="bg-white  overflow-hidden">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Two-path-Banner.jpg"
              alt="Placeholder"
              className="h-72 w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4">
              <p className="text-xl text-black">12.07.23</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-2xl text-black font-semibold mb-2">
                Two paths on the way to 5G
              </h3>
              <p className="text-gray-700 text-lg">
                Calculating your path forward The agendas of the dozen or more
                telecom industry events that took…
              </p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <p className="text-2xl text-orange-500 font-bold pt-8 hover:text-orange-300">
                {" "}
                Read more →
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/transmision-power-control.png"
              alt="Placeholder"
              className="h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
            />

            <div className="p-4">
              <p className="text-xl text-black">11.20.23</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-2xl text-black font-semibold mb-2">
                Control the power of your network – Power-saving software for
                your network
              </h3>
              <p className="text-gray-700 text-lg">
                Much has been said of the power consumption of 5G networks. The
                expectations across the industry are…
              </p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <p className="text-2xl text-orange-500 font-bold pt-8 hover:text-orange-300">
                {" "}
                Read more →
              </p>
            </div>
            <div className="h-4 w-screen bg-white p-2"></div>
          </div>

          {/*  */}
          <div className="bg-white overflow-hidden bg-transparent">
            <div className="p-4">
              <p className="text-xl text-black">11.20.23</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-2xl text-black font-semibold mb-2">
                Control the power of your network – Power-saving software for
                your network
              </h3>
              <p className="text-gray-700 text-lg">
                Much has been said of the power consumption of 5G networks. The
                expectations across the industry are…
              </p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <p className="text-2xl text-orange-500 font-bold pt-8 hover:text-orange-300">
                {" "}
                Read more →
              </p>
            </div>
          </div>
          {/*  */}
          <div className="bg-white overflow-hidden">
            <div className="p-4">
              <p className="text-xl text-black">11.20.23</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-2xl text-black font-semibold mb-2">
                Control the power of your network – Power-saving software for
                your network
              </h3>
              <p className="text-gray-700 text-lg">
                Much has been said of the power consumption of 5G networks. The
                expectations across the industry are…
              </p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <p className="text-2xl text-orange-500 font-bold pt-8 hover:text-orange-300">
                {" "}
                Read more →
              </p>
            </div>
          </div>
          {/* search bar */}
          <div className="">
            {" "}
            <h1 className="text-black text-2xl">Search the Blog</h1>
            <div
              id="search-bar"
              className="w-96 bg-gray-200 border-2 border-black z-10 mt-4"
            >
              <form className="flex items-center justify-center p-2">
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full rounded-md bg-gray-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                >
                  →
                </button>
              </form>
            </div>
          </div>
          {/*  */}
          <div className="bg-white overflow-hidden bg-transparent">
            <div className="p-4">
              <p className="text-xl text-black">11.20.23</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-2xl text-black font-semibold mb-2">
                Control the power of your network – Power-saving software for
                your network
              </h3>
              <p className="text-gray-700 text-lg">
                Much has been said of the power consumption of 5G networks. The
                expectations across the industry are…
              </p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <p className="text-2xl text-orange-500 font-bold pt-8 hover:text-orange-300">
                {" "}
                Read more →
              </p>
            </div>
          </div>
          {/*  */}
          <div className="bg-white overflow-hidden">
            <div className="p-4">
              <p className="text-xl text-black">11.20.23</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-2xl text-black font-semibold mb-2">
                Control the power of your network – Power-saving software for
                your network
              </h3>
              <p className="text-gray-700 text-lg">
                Much has been said of the power consumption of 5G networks. The
                expectations across the industry are…
              </p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <p className="text-2xl text-orange-500 font-bold pt-8 hover:text-orange-300">
                {" "}
                Read more →
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page