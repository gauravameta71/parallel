import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col">
      <img
        src="https://www.parallelwireless.com/wp-content/uploads/hero-resources.jpg"
        alt=""
        className="w-screen h-74 mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[506px]">
        <span className="text-black">Parallel Wireless Worldwide Support</span>
        <hr className="bg-gray-700" />
      </h1>
      <h1 className=" text-center text-xl text-black  pl-40 pr-40 pt-12 font-semibold ">
        <span className="text-black">
          Parallel Wireless provides around-the-clock technical support services
          online and over the phone to all customers, partners, resellers, and
          distributors who hold valid Parallel Wireless service contracts.{" "}
          <br /> <br />
          Please have your User ID ready when you contact Parallel Wireless
          Support to prevent any delays with your support request.
        </span>
      </h1>
      <div className="p-8 flex justify-center items-center">
        <div className="mt-6 bg-orange-500 p-1 rounded-lg px-4 hover:bg-white border-2 border-orange-500">
          <a
            href="#"
            className=" text-xl   font-semibold text-white hover:text-orange-500 "
          >
            SUPPORT PORTAL
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
