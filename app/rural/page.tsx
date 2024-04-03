import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col">
      <img
        src="/urban.png"
        alt=""
        className="w-screen h-74 mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[436px]">
        <span className="text-black">Rural solution</span>
      </h1>

      <div className="flex flex-row justify-center items-center  w-screen bg-gray-100">
        <a
          href="/urban"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-xl w-20 text-center flex justify-center items-center"
        >
          Urban
        </a>
        <a
          href="/rural"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-xl w-20 text-center flex justify-center items-center"
        >
          Rural
        </a>
        <a
          href="/lte"
          className="hover:bg-orange-500 hover:text-white text-black h-14 text-xl w-20 text-center flex justify-center items-center"
        >
          LTE
        </a>
      </div>

      <div className="flex flex-col p-12 text-center">
        <p className="text-xl text-black text-center ml-40 mr-40">
          Enhanced mobile broadband will be the first commercial application of
          5G and can help operators deliver coverage everywhere from rural to
          suburban to most dense urban locations. Parallel Wireless OpenRAN can
          support all those deployment scenarios at the lowest TCO and can be
          deployed on accelerated timeline.
        </p>
        {/* <h1 className="mt-4 text-black font-semibold text-3xl">
          Expand and Modernize Your Networks
        </h1> */}
      </div>
      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-20">
        {/* 1 */}
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-start text-3xl mt-20">
            Features and Capabilities
          </h1>
          <p className="text-lg text-black mt-2">
            {" "}
            Parallel Wireless’s innovative cloud-native OpenRAN coverage
            solution enables coverage by lowering cost, simplifying
            installation, and increasing flexibility through disaggregation of
            hardware and software. The flexibility of our software platform
            enables deployment in urban or rural environments. To meet a variety
            of deployment scenarios, we have a large portfolio of OpenRAN
            hardware available from macrocells, to small cells, to Massive
            MIMOs, all orchestrated and managed by our OpenRAN and network
            software suite: <br /> <br />
          </p>
          <p className="text-lg ml-4 text-black">
            <span className="mr-10">
              {" "}
              •{"     "}Offering ALL Gs in RRHs, all software upgradable to any
              G, and enabling access flexibility; shared capacity on COTS-based
              vBBU to provide voice and data on the same equipment. <br />•
              {"     "}Providing an overall low-cost solution with a cost
              structure that serves low density through deployment flexibility
              (can deploy 1 sector per site, or tri-sector where needed with the
              same hardware and all optimizations and handovers done by OpenRAN
              software) or high density through selection of OpenRAN hardware
              (macros, small cells or Massive MIMOs) that fit the deployment
              need. <br />•{"     "}Enabling the new telco value chain in
              coverage through flexibility in operation – with the Parallel
              Wireless OpenRAN controller enabling new business models, new
              revenue generation and network sharing – coverage network slice
              can be managed by a third party without affecting any other
              regional or urban slices. <br />
            </span>
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
          {/* ///////////// */}

          {/* /////////////////// */}
        </div>
        <div className="w-1/2">
          <img src="/uu1.jpg" alt="Image" className="w-full" />
        </div>
      </div>

      <div className="p-20">
        <h1 className="mt-20 text-black font-semibold text-3xl">
          Deployment Options
        </h1>
        <p className="text-lg text-black mt-2">
          {" "}
          Uncertainty in the coverage business case (from the demand side) in
          low-density areas, operational complexity (from the cost side) and
          competitive pressure in urban/high density markets results in MNOs
          struggling to find a coverage solution that can address both
          scenarios:
          <br /> <br />
        </p>
        <p className="text-lg ml-4 text-black">
          <span className="mr-10">
            {" "}
            •{"     "} <span className="font-semibold">Low density areas:</span>{" "}
            Parallel Wireless’s unique low cost, low footprint and cloud-native
            multi-technology solution helps to deliver coverage to low density
            areas by making deployments easy and affordable to install, maintain
            and to upgrade to any future technology (including 5G) on the same
            hardware without installing any additional hardware or performing
            sites visits. It minimizes the CAPEX/OPEX in these low-density areas
            where there is high uncertainty on return of the investment for
            MNOs. It also delivers superior sustainability.
            <br /> <br />•{"     "}{" "}
            <span className="font-semibold">High density areas:</span>As MNOs
            deploy urban networks easy to install, low-cost and high-performing
            cloud-native Parallel Wireless OpenRAN supports macro or small cell
            deployments for densification and delivers superior end user QoS for
            consumers and industries with our OpenRAN software suite making high
            density networks easy to deploy and maintain by self-configuring and
            self-optimizing them real-time. <br />
          </span>
        </p>
      </div>
      <div className="flex flex-col p-14 justify-center text-center bg-gray-100 text-black text-3xl">
        <p>Download our Urban Solution Overview to learn more</p>
        <img src="/cloud.png" alt="" className="h-14 w-20  ml-[650px]" />
      </div>
      <div className="container relative">
        <img src="/uu2.png" alt="" className="w-screen" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-orange-500 text-white font-bold py-3 px-4 rounded-xl flex flex-row mt-40 mr-[67%] hover:bg-orange-600">
            Download Now{" "}
            <span className="">
              <img
                src="/cloud.svg"
                alt=""
                className="h-6 w-8 ml-2 filter invert "
              />
            </span>
          </button>
        </div>
      </div>

      {/* cards */}
      <div className=" bg-white p-40">
        <h1 className="text-4xl text-black text-center mb-8">
          Related
          <span className="font-semibold"> Products & Technologies</span>
        </h1>
        <div className="grid grid-cols-3 gap-8 ">
          <div className="bg-white overflow-hidden border">
            <img
              src="/uc1.jpg"
              alt="Placeholder"
              className=" h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4 pl-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Outdoor OpenRAN
              </h3>
              <p className="text-gray-700 text-lg">
                Our fully orchestrated OpenRAN hardware consists of macros,
                outdoor and indoor small cells, and Massive MIMOs that are all
                Software Defined Radios (SDRs) and can be software upgraded to
                5G for ease of deployment and much lower cost.
              </p>

              <button className="bg-orange-500 text-white font-bold py-3 px-4 rounded-xl flex flex-row mt-4 w-[48%] mr-[67%] hover:bg-orange-600">
                LEARN MORE →
              </button>
            </div>
          </div>
          <div className="bg-white  overflow-hidden border">
            <img
              src="/uc2.jpg"
              alt="Placeholder"
              className="h-72 w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                5G OpenRAN
              </h3>
              <p className="text-gray-700 text-lg">
                Our cloud-native OpenRAN approach enables any 5G migration
                option and is software upgradable to any future 3GPP releases
                delivering most cost-effective and advanced 5G capabilities to
                mobile operators and industries.
              </p>
              <button className="bg-orange-500 text-white font-bold py-3 px-4 rounded-xl flex flex-row mt-4 w-[48%] mr-[67%] hover:bg-orange-600">
                LEARN MORE →
              </button>
            </div>
          </div>
          <div className="bg-white overflow-hidden border">
            <img
              src="/uc3.jpg"
              alt="Placeholder"
              className="h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
            />

            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                ALL G Real-time SON
              </h3>
              <p className="text-gray-700 text-lg">
                Parallel Wireless 5G 4G 3G 2G and Wi-Fi SON software module
                makes networks automated with self-configuration and
                self-optimization to deliver plug-n-play deployments and
                hands-free maintenance for much lower overall TCO.
              </p>
              <button className="bg-orange-500 text-white font-bold py-3 px-4 rounded-xl flex flex-row mt-4 w-[48%] mr-[67%] hover:bg-orange-600">
                LEARN MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
