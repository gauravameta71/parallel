import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col">
      <img
        src="/cs1.jpg"
        alt=""
        className="w-screen h-[400px] mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[430px]">
        <span className="text-black">Customers</span>
      </h1>
      <div className="flex items-center justify-between bg-white pl-20 pr-20 ">
        {/* 1 */}
        <div className=" pr-4 p-12">
          <h1 className="text-black text-center text-3xl mt-20">
            Helping Reimagine Global Cellular Networks
          </h1>
          <p className="text-lg text-center text-black mt-2">
            ringing together unified network software and OpenRAN hardware, we
            are the only US provider capable of delivering true end-to-end
            innovative solutions for 5G, 4G, 3G and 2G deployments globally,
            including complex mixed technology and multi-vendor scenarios at
            much lower cost. Parallel Wireless enabled the world’s largest Open
            RAN ecosystem and has been recognized by Vodafone and Telefonica as
            a best performing vendor. Our customers include over 60 global
            mobile operators, as well as private and public industries and
            governments that use our software defined network portfolio to
            reimagine their networks. Our innovation has been recognized with
            60+{" "}
            <span className="text-orange-500 font-semibold">
              industry awards.
            </span>
          </p>
        </div>
      </div>
      <div className="bg-gray-200 h-64 flex flex-col p-12">
        <h1 className="text-4xl text-black text-center">
          Open RAN Integration: Run With It
        </h1>
        <button className="bg-orange-500 mt-6 w-[18%] ml-[41%] text-white font-bold py-3 px-4 rounded-xl flex justify-center items-center text-center hover:bg-orange-600">
          VIEW THE WHITE PAPER
        </button>
      </div>
      <div className="flex flex-wrap gap-12 justify-center p-12">
        <img src="/b1.jpg" alt="" className="h-20 w-40" />
        <img src="/b2.jpg" alt="" className="h-20 w-40" />
        <img src="/b3.jpg" alt="" className="h-20 w-40" />
        <img src="/b4.jpg" alt="" className="h-20 w-40" />
        <img src="/b5.jpg" alt="" className="h-20 w-40" />
        <img src="/b6.jpg" alt="" className="h-20 w-40" />
        <img src="/b7.jpg" alt="" className="h-20 w-40" />
        <img src="/b8.jpg" alt="" className="h-20 w-40" />
        <img src="/b9.jpg" alt="" className="h-20 w-40" />
        <img src="/b10.jpg" alt="" className="h-20 w-40" />
        <img src="/b11.jpg" alt="" className="h-20 w-40" />
      </div>

      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-20">
        {/* 1 */}
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-3xl">Telefonica Case Study</h1>
          <p className="text-lg text-black">
            Parallel Wireless Helps New Operator Mayutel to Build 3G/4G Open RAN
            Network in 3 Months Through Partnership with Telefonica.
          </p>
          <div className="mt-6">
            <button className="bg-orange-500 text-white font-bold py-3 px-4 rounded-xl flex flex-row   hover:bg-orange-600">
              Download Case Study{" "}
              <span className="">
                <img
                  src="/cloud.svg"
                  alt=""
                  className="h-6 w-8 ml-2 filter invert "
                />
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          <img src="/cs2.jpg" alt="Image" className="w-full" />
        </div>
      </div>
      {/* img with text */}
      <div className="relative mt-10">
        {/* Background image */}
        <img src="/cs3.jpg" alt="" className="w-screen h-[20%]" />

        {/* Text on top of the image */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="flex flex-row">
            {/* 1 */}
            <div className="flex flex-col p-20">
              <h1 className="text-3xl text-black font-semibold">
                Why Parallel Wireless
              </h1>
              <ol className="text-black mt-2">
                <li className="mt-2">1. Interoperable across All G</li>
                <li className="mt-2">
                  2. Mature and end-to-end OpenRAN network solutions
                </li>
                <li className="mt-2">
                  3.Unification and simplification of 5G 4G 3G 2G and Wi-Fi
                  networks
                </li>
                <li className="mt-2">
                  4. Easy install with plug-n-play and automated maintenance
                </li>
                <li className="mt-2">5. NewRevenue and network sharing</li>
                <li className="mt-2">6. 5G-native architecture</li>
                <li className="mt-2">7. Customer focused</li>
              </ol>
            </div>
            {/* 2 */}
            <div className="flex flex-col p-20">
              <h1 className="text-3xl text-black font-semibold">Benefits</h1>
              <ol className="text-black mt-2">
                <li className="mt-2">1. Lowest TCO</li>
                <li className="mt-2">
                  2. Low-density or high-density indoor and outdoor coverage and
                  capacity
                </li>
                <li className="mt-2">
                  3. Faster deployment with less deployment CAPEX
                </li>
                <li>
                  4.Operational savings through automation and predictive OPEX
                </li>
                <li className="mt-2">5. Profitability</li>
                <li className="mt-2">
                  6. Agility and cost-effective migration to 5G
                </li>
                <li className="mt-2">7. Globally deployed</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* img with text */}

      {/*  */}
      <div className="flex items-center justify-between bg-white  p-20">
        {/* 1 */}
        <div className="w-1/2">
          <img src="/cs4.jpg" alt="Image" className="w-full" />
        </div>
        <div className="w-1/2 ">
          <h1 className="text-black text-3xl pl-14">Vodafone Case Study </h1>
          <p className="text-lg text-black pl-14">
            Learn how Parallel Wireless ALL G OpenRAN helped Vodafone modernize
            their network and reduce CAPEX and OPEX.
          </p>
          <div className="mt-6">
            <button className="bg-orange-500 text-orange font-bold py-3 px-4 rounded-xl flex flex-row ml-14 hover:bg-orange-600">
              Download Case Study{" "}
              <span className="">
                <img
                  src="/cloud.svg"
                  alt=""
                  className="h-6 w-8  filter invert "
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white flex justify-center pt-20 pb-20 pl-36 pr-36">
        <img src="/vimg.jpg" alt="" className="h-96 w-[65%] " />
      </div>
    </div>
  );
};

export default page;
