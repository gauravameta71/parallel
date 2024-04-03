import React from "react";

const TextWithButtonAndImage = () => {
  return (
    <div className="flex items-center justify-between bg-white pl-20 pr-20">
      {/* 1 */}
      <div className="w-1/2 pr-4">
        <h1 className="text-black text-3xl">Private LTE</h1>
        <p className="text-lg text-black ">
          Provide dedicated, fixed-cost LTE networks for businesses and IoT
          devices using Parallel Wireless OpenRAN on licensed, shared, or
          unlicensed spectrum to deliver secure, managed information flow for
          enterprises of any size.
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
        <img src="/s1.jpg" alt="Image" className="w-full" />
      </div>
    </div>
  );
};

export default TextWithButtonAndImage;
