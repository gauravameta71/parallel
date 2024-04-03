import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col pb-4">
      <img
        src="/urban.png"
        alt=""
        className="w-screen h-74 mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[440px]">
        <span className="text-black">Company</span>
      </h1>

      <div className="flex flex-row justify-center items-center  w-screen">
        <h1 className="text-black text-3xl mt-6">About Us:</h1>
      </div>

      <div className="flex flex-col p-12 text-center">
        <p className="text-xl text-black text-center ml-40 mr-40">
          Parallel Wireless is leading the OpenRAN movement with the world’s
          first{" "}
          <span className="text-orange-500 font-semibold">5G/4G/3G/2G</span>{" "}
          cloud-native OpenRAN architecture that is open, standardized, and
          interoperable across five key domains – RAN, Edge, Core, O
          <span className="text-orange-500 font-semibold">
            rchestration and Analytics.
          </span>{" "}
        </p>
        <p className="text-xl text-black text-center ml-40 mr-40 mt-4">
          Through open collaboration with our OpenRAN ecosystem partners, we
          have created a world first and largest fully-compliant OpenRAN
          ecosystem that is capable of delivering the next generation of
          wireless infrastructure at dramatically lower cost, ensuring more
          equal access to 5G across the globe.
        </p>
        <p className="text-xl text-black text-center ml-40 mr-40 mt-4">
          Our OpenRAN portfolio is designed to help our customers modernize
          their networks, reduce deployment cost and complexity, increase
          operational efficiency, find new revenue streams, and start deploying
          multi-vendor 5G networks today.
        </p>
        <p className="text-xl text-black text-center ml-40 mr-40 mt-4">
          Our customers include over 60 global mobile operators, as well as
          private and public industries and governments that are all using our
          software-defined network portfolio to reimagine their networks and get
          ready for 5G.
        </p>
      </div>
      <div className="flex items-center justify-between bg-white pl-20 pr-20">
        {/* 1 */}
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-start text-3xl mt-20">Leadership</h1>
          <p className="text-lg text-black mt-2">
            {" "}
            The Parallel Wireless team has experience building every component
            of the cellular network across 2G, 3G, 4G and 5G. We have built many
            companies from scratch into the leading industry players. For the
            past 7+ years, our amazing team has been reimagining the
            architecture of the cellular networks to make deploying and
            maintaining any G networks, including 5G, easy and cost-effective.
          </p>

          <div className="mt-6">
            <a
              href="#"
              className=" text-xl  font-semibold text-orange-600 hover:text-orange-500"
            >
              Learn More
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          {/* ///////////// */}

          {/* /////////////////// */}
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/leadership-image-585x415.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-between bg-white pr-20 pl-20">
        {/* 1 */}
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/parallel-reimagine-585x415.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-black text-3xl">Our Culture</h1>
          <p className="text-lg text-black">
            We are a fast-moving technology company that is proud of what we do,
            ambitious about{" "}
            <a href="">
              <span className="text-orange-500 hover:underline font-semibold">innovation</span>
            </a>{" "}
            and collaboration, and keenly focused on our {" "}
            <a href="">
              <span className="text-orange-500  hover:underline font-semibold">
                customers’ success.
              </span>
            </a>
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="text-xl font-semibold text-orange-600 hover:text-orange-500 hover:underline"
            >
              Join Our Global Team
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
