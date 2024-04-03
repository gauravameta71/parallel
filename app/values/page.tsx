import React from "react";

const page = () => {
  return (
    <div className="bg-white mt-20">
      <div className="w-screen flex justify-center items-center bg-gray-200 h-40">
        <h1 className="text-black text-4xl mt-8">Mission and Vision</h1>
      </div>
      <div className="p-10">
        <div className=" bg-white ">
          <div className=" bg-orange-500 flex text-center h-40 w-full justify-center items-center">
            <p className="text-5xl font-bold">
              OUR VISION, MISSION, AND VALUES
            </p>
          </div>
        </div>
      </div>

      <div className="p-20">
        <div className="flex flex-row gap-10 justify-center ">
          {/* 1 */}
          <div className="flex flex-row justify-center items-center hover:bg-orange-500  w-[10%] gap-20 shadow-md rounded-lg bg-gray-100">
            <a
              href="/mission"
              className="hover:bg-orange-500 hover:text-white text-black h-14 text-xl w-20 text-center flex justify-center items-center"
            >
              Vision
            </a>
          </div>
          {/* 2 */}
          <div className="flex flex-row justify-center items-center hover:bg-orange-500  w-[10%] gap-20 shadow-md rounded-lg bg-gray-100">
            <a
              href="/mission_1"
              className="hover:bg-orange-500 hover:text-white text-black h-20 text-xl w-20 text-center flex justify-center  items-center"
            >
              Mission
            </a>
          </div>

          {/* 3 */}
          <div className="flex flex-row justify-center hover:bg-orange-500 items-center  w-[10%] gap-20 shadow-md rounded-lg bg-gray-100">
            <a
              href="/values"
              className="hover:bg-orange-500 hover:text-white text-black h-14 text-xl w-20 text-center flex justify-center items-center"
            >
              Values
            </a>
          </div>
        </div>
        <div className="border flex flex-col shadow-2xl p-14">
          <div className=" flex flex-row gap-4">
            <h1 className="text-4xl text-orange-500">OUR VALUES</h1>

            <p className="text-2xl mt-1  text-black">
              The values guide how PW Reimaginers achieve our company Vision and
              Mission.
            </p>
          </div>
          <div className="">
            <img
              src="/val2.png"
              alt=""
              className="h-full w-full mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
