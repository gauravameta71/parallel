
import React from "react";

const TextWithButtonAndImage = () => {
  return (
    <div className="flex items-center justify-between bg-white p-20">
        {/* 1 */}
      <div className="w-1/2 pr-4">
        <h1 className="text-black text-3xl">5G Starts Here</h1>
        <p className="text-lg text-black">
          Through open collaboration with OpenRAN ecosystem, we’ve created the
          world’s first and largest fully compliant OpenRAN portfolio that
          delivers the next generation of wireless infrastructure at a much
          lower cost, ensuring more equal access to 5G globally. Our
          software-defined and interoperable OpenRAN architecture was designed
          from the ground up to reduce complexity and drive out cost from every
          aspect from the RAN to the Core. We pride ourselves on offering a
          fully automated outdoor or indoor coverage and capacity solutions that
          are easy and cost-effective to deploy and maintain and are software
          upgradable to 5G.
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
        <img src="/h1.jpg" alt="Image" className="w-full" />
      </div>
      
    </div>
  );
};

export default TextWithButtonAndImage;
