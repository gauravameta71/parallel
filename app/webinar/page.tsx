import React from "react";
import YtVideo from "@/app/components/YtVideo";

const Page = () => {
  return (
    <div className="bg-white">
      <img
        src="https://www.parallelwireless.com/wp-content/uploads/blog-hero.jpg"
        alt=""
        className="w-screen h-74"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[394px]">
        <span className="text-black">Webinars</span>
      </h1>
      <div className="flex flex-row gap-12 justify-center  w-screen bg-gray-200 ">
        {/* Your navigation links */}
      </div>
      <div className="p-20 flex flex-col text-black">
        <p className="text-center text-xl">
          Join our webinars, live or on-demand, to learn about our unified,
          cloud-native, software-based OpenRAN solutions and All G (5G, 4G, 3G,
          2G) technologies.
        </p>
        <div className="flex-col p-10 ">
          <h1 className="text-4xl text-center pb-12">
            5G NSA vs SA: Calculating the right way forward
          </h1>
          {/* Embed YouTube video */}
          <div className="container mx-auto ml-80">
            <YtVideo videoId="jPxHvmyR57w" />
          </div>
        </div>
        {/*  */}
        <h1 className="text-4xl text-center pt-6">
          Cloud-Native Webinar Series
        </h1>
        <hr className="h-px my-8 bg-gray-200 border-0  dark:bg-green-500"></hr>
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold hover:text-orange-500 hover:underline ">
            Cloud-Native Open RAN
          </h1>

          <div className="flex justify-center items-center pt-6">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Cloud-Native-Open-RAN-768x424.jpg"
              alt=""
              className="h-96 w-[40%]"
            />
          </div>
        </div>
        {/*  */}
        <hr className="h-px my-8 bg-gray-200 border-0  dark:bg-green-500"></hr>
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold hover:text-orange-500 hover:underline ">
            Cloud-Native Applications 101
          </h1>

          <div className="flex justify-center items-center pt-6">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Cloud-Native-Applications-101-768x424.jpg"
              alt=""
              className="h-96 w-[40%]"
            />
          </div>
        </div>
        {/*  */}
        <h1 className="text-lg p-10 ">
          Subscribe to our{" "}
          <a href="" className="">
            {" "}
            <span className="text-orange-500 font-bold">
              BrightTalk channel
            </span>{" "}
          </a>
          and sign up for the remainder of the OpenRAN series as the sessions
          become available.
        </h1>
        {/*  */}
        <h1 className="text-4xl  pt-6">Partner Webinars</h1>
        <hr className="h-px my-8 bg-gray-200 border-0  dark:bg-green-500"></hr>
        <h1 className="text-3xl font-bold  pt-6">
          On-Demand: Changing the RAN Deployment Economics Paradigm with OpenRAN
          – Hosted by Competitive Carriers Association
        </h1>

        <div className=" pt-6 flex flex-row gap-x-12">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/CCA-webinar-screen-cap-768x401.jpg"
            alt=""
            className="h-96 w-[40%]"
          />
          <img
            src="  https://www.parallelwireless.com/wp-content/uploads/CCA-logo-200x200.png"
            alt=""
            className="h-20 w-20"
          />
        </div>
        {/*  */}
        <h1 className="text-3xl font-bold  pt-6">
          On-Demand: Changing the Mobile Networks Economics with Parallel
          Wireless OpenRAN – Hosted by Intel Network Builders
        </h1>

        <div className=" pt-6 flex flex-row gap-x-12">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/Intel-Network-Builders-Webinar.jpg"
            alt=""
            className="h-96 w-[40%]"
          />
          <img
            src="  https://www.parallelwireless.com/wp-content/uploads/Intel-logo-255x168.png"
            alt=""
            className="h-20 w-20"
          />
        </div>
        {/*  */}
        <h1 className="text-3xl font-bold  pt-6">
          Exploring the Thriving Open RAN Ecosystem Deploying Mobile Networks
          Around the World – Hosted by iGR Inc.
        </h1>

        <div className=" pt-6 flex flex-col gap-y-2 justify-center items-center gap-x-12">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/iGR-Webinar-Mavenir-Altiostar-768x405.png"
            className="h-96 w-[40%]"
          />
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/IGR-Logo.jpg"
            alt=""
            className="h-20 w-80"
          />
        </div>
        <h1 className="text-3xl font-bold  pt-6">
          Delivering Agility, Flexibility & TCO Reduction with Cloud-Native Open
          RAN – Hosted by Intel Network Builders
        </h1>

        <div className=" pt-6 flex flex-col gap-y-2 justify-center items-center gap-x-12">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/Partner-Webinar-Amit-Ghadge.jpg"
            className="h-96 w-[40%]"
          />
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/Intel-logo.png"
            alt=""
            className="h-20 w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
