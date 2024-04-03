import React from "react";

import SecThree from "../components/SecThree";
import SecFour from "../components/SecFour";
import SecFive from "../components/SecFive";

const page = () => {
  return (
    <div className="bg-white">
      <img
        src="https://www.parallelwireless.com/wp-content/uploads/products-hero-1600x500.jpg"
        alt=""
        className="w-screen h-74"
      />

      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[395px]">
        <span className="text-black">Resources</span>
      </h1>
      <h1 className="flex text-4xl text-black justify-center p-2 pt-8">
        Reimagine Your Network.
      </h1>
      <h1 className="flex text-4xl text-black justify-center p-2">
        Reimagine Your Economics
      </h1>

      <p className="flex text-lg text-center  text-black justify-center p-4 ml-40 mr-40">
        In this asset library you’ll find solutions brochures, data sheets,
        recorded webinars, and customer videos and case studies to learn more
        about Parallel Wireless world’s leading 5G 4G 3G 2G OpenRAN.
      </p>
      {/* 1 */}
      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-20">
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-3xl">Solution Overviews</h1>
          <p className="text-lg text-black">
            Learn more about Parallel Wireless 5G 4G 3G 2G coverage and capacity
            outdoor and indoor solutions by checking out our solution overview
            briefs and presentations.
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
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/5g-img.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>
      {/* 1 */}
      {/* 2 */}
      <div className="flex items-center justify-between bg-white pr-20 pl-20">
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/eNodeB-img.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-black text-3xl">Case Studies</h1>
          <p className="text-lg text-black">
            modernize their networks and reduce costs with our outdoor and
            indoor OpenRAN.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="text-xl font-semibold text-orange-600 hover:text-orange-500"
            >
              Learn More
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      {/* 2 */}
      {/* 3 */}
      <div className="flex items-center justify-between bg-white pl-20 pr-20">
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-3xl"> Customer Testimonial Videos</h1>
          <p className="text-lg text-black">
            Hear it straight from our customers by watching our customer
            testimonial videos!
          </p>
          <div className="mt-6">
            <a
              href="#"
              className=" text-xl  font-semibold text-orange-600 hover:text-orange-500"
            >
              Watch here more
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/parallel-photo.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>
      {/* 3 */}

      {/* 4 */}
      <div className="flex items-center justify-between bg-white pr-20 pl-20">
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/city-img.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-black text-3xl"> White Papers</h1>
          <p className="text-lg text-black">
            Take a deeper dive into our 5G 4G 3G 2G cloud-native solutions with
            our white papers.
          </p>
          <div className="mt-6 flex flex-row">
            <a
              href="#"
              className="text-xl font-semibold text-orange-600 hover:text-orange-500"
            >
              Download Now{" "}
            </a>
            <img src="/cloud.png" alt="" className="h-6 w-10 " />
          </div>
        </div>
      </div>
      {/* 4 */}
      {/* 5 */}
      <div className="flex items-center justify-between bg-white pl-20 pr-20 ">
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-3xl">Webinars</h1>
          <p className="text-lg text-black">
            Our webinar program is a great way to learn about
            everything-Parallel as well as latest industry trends.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className=" text-xl  font-semibold text-orange-600 hover:text-orange-500"
            >
              Watch Now
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/presentation-img.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>
      {/* 5 */}

      {/*6  */}
      <div className="flex items-center justify-between bg-white pr-20 pl-20 pb-4">
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/parallel-play-button.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-black text-3xl"> Videos and Demos</h1>
          <p className="text-lg text-black">
            Our videos and demos are a great way to learn about our products,
            solutions, and deployments – check them out to learn more.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="text-xl font-semibold text-orange-600 hover:text-orange-500"
            >
              Watch Now
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      {/* 6 */}

      <div className="flex flex-col p-14 justify-center text-center bg-gray-100 text-black text-3xl">
        <p>
          Learn from our technical experts about how our OpenRAN solutions are
          improving networks around the world.
        </p>
      </div>
    </div>
  );
};

export default page;
