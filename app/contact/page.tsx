import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col pb-12">
      <img
        src="/urban.png"
        alt=""
        className="w-screen h-74 mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[436px]">
        <span className="text-black text-6xl">Contact Us</span>
      </h1>
      <h1 className="text-4xl text-black text-center p-4 mt-12">
        Parallel Wireless Corporate Office
      </h1>
      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-10">
        {/* 1 */}

        <div className="w-1/2 pr-4 mt-2">
          <h1 className="text-black text-4xl">Contact Info:</h1>
          <p className="text-xl text-black pt-4">
            300 Innovative Way, Suite #2310 <br /> Nashua, NH 03062, USA
          </p>
          <p className="text-xl text-black pt-4">
            <span className="font-semibold">Phone:</span> +1-603-589-9937 <br />
            <span className="font-semibold">Email:</span>{" "}
            <span className="text-orange-500 font-bold">
              info@parallelwireless.com
            </span>{" "}
            <br />
            <span className="font-semibold">Support:</span>{" "}
            <span className="text-orange-500 font-bold">
              info@parallelwireless.com
            </span>{" "}
          </p>
          <p className="text-xl text-black pt-6">
            For PR inquiries, please email us at{" "}
            <span className="font-bold text-orange-500">
              PR@parallelwireless.com
            </span>{" "}
            <br />
            For AR inquiries, please email us at{" "}
            <span className="font-bold text-orange-500">
              AR@parallelwireless.com
            </span>
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/Parallel-Wireless-Corporate-Office.png"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>
      <hr className="mt-10" />
      {/* 2 */}
      <h1 className="text-4xl text-black text-center p-4 mt-12">
        Parallel Wireless UK
      </h1>
      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-10">
        <div className="w-1/2 pr-4 mt-2">
          <h1 className="text-black text-4xl">Contact Info:</h1>

          <p className="text-xl text-black pt-4">
            Parallel Wireless UK Bristol <br /> office Prologue Works, <br /> 25
            Marsh Street, <br />
            Bristol BS1 <br /> 4AX United Kingdom
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/ParallelWireless-UK1.jpg"
            alt="Image"
            className="w-full "
          />
        </div>
      </div>
      {/* 3 */}
      <h1 className="text-4xl text-black text-center p-4 mt-12">
        Parallel Wireless Parallel Wireless India
      </h1>
      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-10">
        <div className="w-1/2 pr-4 mt-2">
          <h1 className="text-black text-4xl">Contact Info:</h1>

          <p className="text-xl text-black pt-4">
            Parallel Wireless UK Bristol <br /> office Prologue Works, <br /> 25
            Marsh Street, <br />
            Bristol BS1 <br /> 4AX United Kingdom
          </p>
          <p className="text-xl text-black pt-4">
            <span className="font-bold">Phone:</span> +0091 020 63114100
          </p>

          <h1 className="text-black text-4xl">Contact Info:</h1>

          <p className="text-xl text-black pt-4">
            Parallel Wireless India Pvt Limited, Bengaluru Office <br /> 5th
            Floor, Ferns Icon, Survey No.28 &36/5 <br /> Doddanakundi, Next to
            Akme Ballet <br /> Off Outer Ring Road Bengaluru 560 037
          </p>
          <p className="text-xl text-black pt-4">
            <span className="font-bold">Phone:</span> +91-80-4611-5208
          </p>
        </div>

        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/Parallel-Wireless-India.png"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>
      {/* 4 */}
      <h1 className="text-4xl text-black text-center p-4 mt-12 ">
        Parallel Wireless Israel
      </h1>
      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-10">
        <div className="w-1/2 pr-4 mt-2">
          <h1 className="text-black text-4xl">Contact Info:</h1>

          <p className="text-xl text-black pt-4">
            Parallel Wireless Israel LTD. <br /> Atir Yeda 1 St., building 2,
            8th floor <br />
            Zip Code 4464301 <br /> Kfar Sava, Israel
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/Parallel-Wireless-Israel-new.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>
      {/* ***************** */}
    </div>
  );
};

export default page;
