import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col">
      <img
        src="https://www.parallelwireless.com/wp-content/uploads/2022-Web-Banner-Collage-Who-We-Are-1600x500.jpg"
        alt=""
        className="w-screen h-74 mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[505px]">
        <span className="text-black">Who We Are</span>
      </h1>

      <div className="flex flex-row justify-center items-center  w-screen">
        <h1 className="text-black text-3xl mt-6">We Are Reimaginers</h1>
      </div>

      <div className="flex flex-col p-12 text-center">
        <p className="text-xl text-black text-center ml-40 mr-40">
          Parallel Wireless is the only US company challenging the world’s
          legacy vendors with the industry’s only unified ALL G (5G/4G/3G/2G)
          software-enabled solution. People come to work here because we are
          building the future of telecom. They stay, because they are challenged
          and driven by an incredible technology and team. The company is
          engaged with 50+ leading operators worldwide and has been named as a
          best performing vendor by Telefonica and Vodafone. Parallel Wireless’s
          innovation and excellence in multi-technology, open virtualized RAN
          solutions have been recognized with 65+ industry awards.
        </p>
      </div>
      <div className="flex items-center justify-between bg-white pl-20 pr-20 ">
        {/* 1 */}
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-start text-3xl mt-20">
            Vision and Mission
          </h1>
          <p className="text-lg text-black mt-2">
            Our mission since day one has been to help global mobile operators
            to reimagine their networks through Parallel Wireless’s unified ALL
            G cloud- native OpenRAN architecture and the world’s first and
            largest OpenRAN ecosystem by delivering substantial cost savings to
            their end users and industries.
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
        <div className="w-1/2 mt-8 ">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/missionandvision.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-between bg-white pr-20 pl-20">
        {/* 2 */}
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/sw-wave-585x415-1.jpg"
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-black text-3xl">
            Reimagine Your Network. <br /> Reimagine Your Economics
          </h1>
          <p className="text-lg text-black">
            Our software-defined fully compliant and interoperable OpenRAN
            architecture was designed from the ground up to reduce complexity
            and drive out cost from every aspect from the RAN to the Core. We
            pride ourselves on offering a fully automated outdoor or indoor
            coverage and capacity solutions that are easy and cost-effective to
            deploy and maintain and are software upgradable to 5G.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="text-xl font-semibold text-orange-600 hover:text-orange-500 hover:underline"
            >
              Join Our Global Team
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      {/* 3 */}

      <div className="flex items-center justify-between bg-white pl-20 pr-20 ">
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-start text-3xl mt-20">
            Reimaginers Wanted!
          </h1>
          <p className="text-lg text-black mt-2">
            People come to work at Parallel Wireless because they are inspired
            with our vision to reimagine telecom industry. They stay, because
            they are motivated by an incredible technology and team and are
            inspired every day by making a difference. We take pride in our
            commitment to employee growth, and our culture is built on
            atmosphere of empowerment, trust, integrity, respect, and open
            communication. We have assembled an amazing team that helped us to
            get deployed in over 60 global networks and are looking to expand
            the team to continue our industry disruption.
          </p>

          <div className="mt-6">
            <a
              href="#"
              className=" text-xl  font-semibold text-orange-600 hover:text-orange-500 hover:underline"
            >
              Reimagine Cellular Networks with Us
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
        <div className="w-1/2 mt-8 ">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/parallel-photo.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>

      <div className="h-full w-full flex justify-center p-20">
        <img
          src="/image2.png"
          alt=""
          className="h-[70%] w-[660px]"
        />
      </div>
    </div>
  );
};

export default page;
