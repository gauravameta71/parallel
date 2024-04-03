import React from "react";

const TextWithButtonAndImage = () => {
  return (
    <div className="flex items-center justify-between bg-white pr-20 pl-20">
      {/* 1 */}
      <div className="w-1/2">
        <img src="/s2.jpg" alt="Image" className="w-full" />
      </div>
      <div className="w-1/2 pl-4">
        <h1 className="text-black text-3xl">Urban Deliver</h1>
        <p className="text-lg text-black">
          high throughput, low latency and consistent experience with Parallel
          Wireless easy to install and maintain, low-cost and high-performing
          cloud-native 5G 4G 3G 2G architecture for macro or small cell
          deployments.
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
