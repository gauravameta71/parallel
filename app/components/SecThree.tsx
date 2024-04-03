import React from "react";

const TextWithButtonAndImage = () => {
  return (
    <div className="flex items-center justify-between bg-white pl-20 pr-20">
      {/* 1 */}
      <div className="w-1/2 pr-4">
        <h1 className="text-black text-3xl">In-Building</h1>
        <p className="text-lg text-black">
          Deploy reliable indoor coverage solutions at pennies per square foot
          while reducing the complexity of deployment and maintenance and
          delivering quality voice and data services to the end user.
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
        <img src="/s3.jpg" alt="Image" className="w-full" />
      </div>
    </div>
  );
};

export default TextWithButtonAndImage;
