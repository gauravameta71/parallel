import React from "react";

const page = () => {
  return (
    <div className="bg-white mt-20">
      <div className="w-screen flex justify-center items-center bg-gray-200 h-40 flex-col">
        <h1 className="text-black text-4xl mt-8">Press Release</h1>
        <p className="font-bold text-xl text-black">
          Contact Public Relations:{" "}
          <span className="text-orange-500">PR@parallelwireless.com</span>
        </p>
      </div>
      <div className="flex items-center justify-between bg-white pr-20 pl-20 p-20">
        {/* 1 */}
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/Pavo-Group.jpeg"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-4">
          <p className="text-black text-lg">February 27, 2024</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <h1 className="text-black text-3xl">
            Pavo Group and Parallel Wireless Embark On a Strategic Collaboration
            to Deliver Next-Generation Mobile Telecommunication Equipment
            Manufacturing
          </h1>
          <p className="text-lg text-black">
            Nashua, NH, FEBRUARY 27, 2024– Parallel Wireless, a leading pioneer
            of Open RAN hardware-agnostic and energy efficient…
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
      <div className="h-36 text-black bg-gray-200 p-10">
        <form className="flex flex-row p-2 gap-4">
          <p className="text-xl pt-2.5 text-black">SORT BY</p>
          <input
            type="text"
            placeholder="YEAR"
            className="rounded-md border-2 mt-2 border-black bg-gray-100 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          />
        </form>
      </div>

      <div className="p-14 text-black flex flex-col">
        <div className="flex flex-col">
          <p className="text-black text-lg">February 27, 2024</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p className="text-black text-4xl font-bold hover:underline">
            Parallel Wireless to Deliver GreenRAN™ Hardware-Agnostic
            Capabilities on AMD EPYC™ 8004 “Siena Processor Platform
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
        <div className="flex flex-col">
          <p className="text-black text-lg">February 27, 2024</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p className="text-black text-4xl font-bold hover:underline">
            Parallel Wireless Announces Automated GreenRAN™ xApps Suite,
            Delivering Energy Savings in Real-Time
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
    </div>
  );
};

export default page;
