import React from 'react'

const Awards = () => {
  return (
    <div className="bg-white p-20 flex flex-row gap-20 justify-center">
      <div className="flex flex-col justify-center items-center w-1/2 m-8 ">
        <img src="/a1.png" alt="" className="h-[105px] w-[140px] mt-6" />
        <h1 className="text-black text-3xl font-semibold pt-6">
          Upcoming Events
        </h1>
        <p className="text-black text-xl pt-6">
          Visit with us at upcoming tradeshows, conferences or attend our
          webinars to learn how we can help you reimagine your networks.
        </p>

        <button
          className=" text-orange-500 pt-6 mt-6 flex justify-center  w-[330px] hover:text-orange-500 font-bold py-3 px-4 rounded-xl ml-4 text-xl"
          type="button"
        >
          Connect with us at events →
        </button>
      </div>
      {/* 2 */}
      <div className="flex flex-col justify-center items-center w-1/2 m-8 ">
        <img src="/a2.png" alt="" className="h-[105px] w-[140px] mt-6" />
        <h1 className="text-black text-3xl font-semibold pt-6">
          Upcoming Events
        </h1>
        <p className="text-black text-xl pt-6">
          Visit with us at upcoming tradeshows, conferences or attend our
          webinars to learn how we can help you reimagine your networks.
        </p>
        <button
          className=" text-orange-500 pt-6 flex justify-center  w-[170px] hover:text-orange-500 font-bold py-3 px-4 rounded-xl ml-4 text-xl"
          type="button"
        >
          Learn More →
        </button>
      </div>
    </div>
  );
}

export default Awards