import React from "react";

const TextWithButtonAndImage = () => {
  return (
    <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-20">

      <div className="w-1/2 pr-4">
        <h1 className="text-black text-3xl">Rural</h1>
        <p className="text-lg text-black">
          Support urban or rural coverage deployments with Parallel Wireless
          easy to deploy and easy to maintain OpenRAN to deliver optimal
          subscriber experience at much lower TCO.
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
