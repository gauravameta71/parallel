import React from "react";

const LeadershipCulture = () => {
  return (
    <div className="bg-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-semibold text-black flex justify-center">
            Leadership / Culture
          </h2>
        </div>
        <div className="mt-10 flex flex-row justify-center">
          <dl className="flex flex-row gap-14">
            <div className="gap-10">
              <div className="flex flex-col items-center">
                <dt className="mb-2">
                  <div className="flex items-center justify-center rounded-md text-white">
                    <img src="/l1.png" alt="" className="w-40" />
                  </div>
                  <p className="mt-5 font-medium text-gray-900 flex justify-center text-3xl">
                    Our Leadership
                  </p>
                </dt>
                <dd className="mt-1 text-gray-500 text-center text-lg">
                  The Parallel Wireless leadership team has experience building
                  many startup companies into leading industry players.
                </dd>
                <a
                  href="#"
                  className="mt-6 text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Our Leaders
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center">
                <dt className="mb-2">
                  <div className="flex items-center justify-center rounded-md text-white">
                    <img src="/l2.png" alt="" className="w-40 h-[120px]" />
                  </div>
                  <p className="mt-6 font-medium text-gray-900 flex justify-center text-3xl">
                    Our People
                  </p>
                </dt>
                <dd className="mt-1 text-gray-500 text-center text-lg">
                  Reimaginers wanted. We have positions open across the globe.
                  Join us.
                </dd>
                <a
                  href="#"
                  className="mt-6 text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Become a Reimaginer
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center">
                <dt className="mb-">
                  <div className="flex items-center justify-center rounded-md text-white">
                    <img src="/l3.png" alt="" className="w-40 h-32" />
                  </div>
                  <p className="mt-5 font-medium text-gray-900 flex justify-center text-3xl">
                    Our Culture
                  </p>
                </dt>
                <dd className="mt-1 text-gray-500 text-center text-lg">
                  We are a fast-moving technology company that is ambitious
                  about innovation and collaboration, and focused on our
                  customers' success.
                </dd>
                <a
                  href="#"
                  className="mt-6 text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Our Culture
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCulture;
