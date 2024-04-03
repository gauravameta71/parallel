import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col">
      <img
        src="https://www.parallelwireless.com/wp-content/uploads/hero-resources.jpg"
        alt=""
        className="w-screen h-74 mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[505px]">
        <span className="text-black">News</span>
      </h1>

      <div className="flex flex-col p-12 text-center">
        <p className="text-xl text-black text-center ml-40 mr-40">
          At Parallel Wireless, we try to be as active as possible within the
          markets we service. In doing so, we find ourselves attending many
          events, conferences, and tradeshows in the wireless, telecom, and
          Public Sector industries. If you would like to hear what we have
          presented at previous events, or to see what noise we’ve been making
          in industry publications, visit our News page to learn more about our
          Open RAN solutions and deployments. If you would like to see what
          future events we will be attending, or to setup a meeting with us at
          one of these upcoming events, visit our Events page.
        </p>
      </div>

      <div className=" bg-white p-20">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white overflow-hidden relative">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/in-the-news.jpg"
              alt="Placeholder"
              className="h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover relative"
            />
            <div className="absolute mt-[30%] top-0 left-0 bg-orange-500 py-2 px-4">
              <p className="text-white text-5xl">In The News</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                See what we’ve been up to.
              </h3>
            </div>
          </div>
          {/* 2 */}
          <div className="bg-white  overflow-hidden relative">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/upcomingevent-e1620925173854.png"
              alt="Placeholder"
              className="h-72 w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="absolute mt-[30%] top-0 left-0 bg-orange-500 py-2 px-4">
              <p className="text-white text-5xl">Hear Us Speak</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                See what events we’ll be attending.
              </h3>
            </div>
          </div>
          {/* 3 */}
          <div className="bg-white overflow-hidden relative">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/press-releases-sm.jpg"
              alt="Placeholder"
              className="h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
            />

            <div className="absolute mt-[30%] top-0 left-0 bg-orange-500 py-2 px-4">
              <p className="text-white text-5xl">Press Releases</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Click here to read our announcements.
              </h3>
            </div>
          </div>
          {/* </div>4 */}
          <div className="bg-white overflow-hidden relative">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/ourawards.png"
              alt="Placeholder"
              className="h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
            />

            <div className="absolute mt-[30%] top-0 left-0 bg-orange-500 py-2 px-4">
              <p className="text-white text-5xl">Awards</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                See what awards we’ve been nominated for.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
