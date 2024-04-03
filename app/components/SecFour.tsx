import React from "react";

const TextWithButtonAndImage = () => {
  return (
    <div className="flex items-center justify-between bg-white pl-20 pr-20">
      {/* 1 */}
      <div className="w-1/2">
        <img src="/s4.jpg" alt="Image" className="w-full" />
      </div>
      <div className="w-1/2 pl-4">
        <h1 className="text-black text-3xl">Public Safety LTE</h1>
        <p className="text-lg text-black">
          Provide Public Safety LTE with our solution to deliver reliable and
          secure coverage, local organizational control, and resilience to first
          responders, police and defense organizations in daily and tactical
          operations.
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
  );
};

export default TextWithButtonAndImage;
