import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col">
      <img
        src="https://www.parallelwireless.com/wp-content/uploads/hero-resources.jpg"
        alt=""
        className="w-screen h-74 mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[506px]">
        <span className="text-black">News Coverage</span>
      </h1>

      {/* cards */}
      <div className=" bg-white p-10 pl-20 pr-20">
        <h1 className="text-4xl text-black text-center mb-8">Articles</h1>
        <div className="grid grid-cols-3 gap-8 ">
          <div className="bg-white overflow-hidden">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/logo-300x131.png"
              alt="Placeholder"
              className=" p-12 border w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4 pl-4 ">
              <h3 className="text-2xl text-black font-semibold mb-2">
                The Future is All-G: Efficient networks will need to utilize the
                full range of cellular technologies
              </h3>
              <div className="flex flex-row mt-2  mb-2">
                <a href="#" className="text-gray-400 hover:text-white mx-2 ">
                  <img src="/twitter.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/linkedin.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/facebook.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/youtube.png" alt="" className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-700 text-lg">
                While the industry is buzzing with discussion about the
                fantastic capabilities of 5G, for many carriers it still makes
                much more financial sense to deploy 2G and 4G networks, in other
                words introducing voice services to new rural areas with 2G/4G
                and delivering high-speed data in urban/dense areas with 4G.
                This will allow them to tier their offer in order to target a
                realistic ARPU while providing services that are truly in
                current demand.
              </p>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Read More
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white  overflow-hidden ">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/telecmpaper-logo.png"
              alt="Placeholder"
              className="p-12 border w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Brazil mobile operators take part in OpenRAN trial with Parallel
              </h3>
              <div className="flex flex-row mt-2  mb-2">
                <a href="#" className="text-gray-400 hover:text-white mx-2 ">
                  <img src="/twitter.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/linkedin.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/facebook.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/youtube.png" alt="" className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-700 text-lg">
                Parallel Wireless has announced it is working with Brazil’s
                National Institute of Telecommunications (Inatel) on an OpenRAN
                field trial involving Telecom Infra Project (TIP) and four major
                Brazilian MNOs, namely Vivo, Claro, TIM and Brisanet.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Read More
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden ">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Fast-Mode-300x225.png"
              alt="Placeholder"
              className="p-12 border w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
            />

            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Parallel Wireless, TIP, Claro, TIM, Vivo & Others to Conduct
                Open RAN Field Trial in Brazil
              </h3>
              <div className="flex flex-row mt-2  mb-2">
                <a href="#" className="text-gray-400 hover:text-white mx-2 ">
                  <img src="/twitter.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/linkedin.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/facebook.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/youtube.png" alt="" className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-700 text-lg">
                Parallel Wireless, the U.S.-based Open RAN leader delivering the
                world’s leading All G, cloud-native Open RAN solution, is
                partnering with Inatel, Telecom Infra Project (TIP), Brisanet,
                Claro, TIM, and Vivo to conduct a field trial enabling
                leading-edge 4G and 5G broadband communications throughout
                Brazil and other LATAM countries.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Read More
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className=" bg-white pl-20 pr-20 pb-8">
        <div className="grid grid-cols-3 gap-8 ">
          <div className="bg-white overflow-hidden ">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/logo-300x131.png"
              alt="Placeholder"
              className=" p-12 w-full border hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4 pl-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                The Future is All-G: Efficient networks will need to utilize the
                full range of cellular technologies
              </h3>
              <div className="flex flex-row mt-2  mb-2">
                <a href="#" className="text-gray-400 hover:text-white mx-2 ">
                  <img src="/twitter.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/linkedin.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/facebook.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/youtube.png" alt="" className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-700 text-lg">
                While the industry is buzzing with discussion about the
                fantastic capabilities of 5G, for many carriers it still makes
                much more financial sense to deploy 2G and 4G networks, in other
                words introducing voice services to new rural areas with 2G/4G
                and delivering high-speed data in urban/dense areas with 4G.
                This will allow them to tier their offer in order to target a
                realistic ARPU while providing services that are truly in
                current demand.
              </p>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Read More
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white  overflow-hidden ">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/telecmpaper-logo.png"
              alt="Placeholder"
              className="p-12 border w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Brazil mobile operators take part in OpenRAN trial with Parallel
              </h3>
              <div className="flex flex-row mt-2  mb-2">
                <a href="#" className="text-gray-400 hover:text-white mx-2 ">
                  <img src="/twitter.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/linkedin.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/facebook.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/youtube.png" alt="" className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-700 text-lg">
                Parallel Wireless has announced it is working with Brazil’s
                National Institute of Telecommunications (Inatel) on an OpenRAN
                field trial involving Telecom Infra Project (TIP) and four major
                Brazilian MNOs, namely Vivo, Claro, TIM and Brisanet.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Read More
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden ">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Fast-Mode-300x225.png"
              alt="Placeholder"
              className="p-12 border w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
            />

            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Parallel Wireless, TIP, Claro, TIM, Vivo & Others to Conduct
                Open RAN Field Trial in Brazil
              </h3>
              <div className="flex flex-row mt-2  mb-2">
                <a href="#" className="text-gray-400 hover:text-white mx-2 ">
                  <img src="/twitter.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/linkedin.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/facebook.png" alt="" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                  <img src="/youtube.png" alt="" className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-700 text-lg">
                Parallel Wireless, the U.S.-based Open RAN leader delivering the
                world’s leading All G, cloud-native Open RAN solution, is
                partnering with Inatel, Telecom Infra Project (TIP), Brisanet,
                Claro, TIM, and Vivo to conduct a field trial enabling
                leading-edge 4G and 5G broadband communications throughout
                Brazil and other LATAM countries.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-orange-600 hover:text-orange-500"
                >
                  Read More
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 flex justify-center items-center">
        <div className="mt-6 bg-orange-500 p-1 rounded-lg px-4 hover:bg-white border-2 border-orange-500">
          <a
            href="#"
            className=" text-xl   font-semibold text-white hover:text-orange-500 "
          >
            Load More
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
