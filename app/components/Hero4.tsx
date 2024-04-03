
import React from "react";

const TextWithButtonAndImage = () => {
  return (
    <div className="flex items-center justify-between bg-white p-20">
      {/* 1 */}
      <div className="w-1/2 pr-4">
        <h1 className="text-black text-3xl">Reimagine Your Economics</h1>
        <p className="text-lg text-black">
          The company’s end-to-end ALL G cloud-native OpenRAN portfolio is
          designed to help our customers modernize their networks, reduce
          deployment cost and complexity, increase operational efficiency, find
          new revenue streams and start deploying multi-vendor 5G networks
          today. Software innovation and openness across 5G/4G/3G /2G and Wi-Fi
          coupled with network automation drives TCO reduction for low-density
          or high density use cases of up to 60% for CAPEX and 65% for OPEX.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className=" text-xl  font-semibold text-orange-600 hover:text-orange-500"
          >
            Hear from Our Customers
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/h3.jpg" alt="Image" className="w-full" />
      </div>
    </div>
  );
};

export default TextWithButtonAndImage;
