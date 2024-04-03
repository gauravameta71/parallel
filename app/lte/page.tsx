import React from "react";

const page = () => {
  return (
    <div className="bg-white relative flex flex-col">
      <img
        src="/lte.jpg"
        alt=""
        className="w-screen h-[400px] mt-[110px] object-cover sticky"
      />
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[430px]">
        <span className="text-black">Private LTE</span>
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
          Parallel Wireless Private LTE solution provides global mobile
          operators with a new revenue generating opportunity for private and
          public enterprises in search to replace their legacy, hardware-centric
          networks with cloud-native, easy to deploy and maintain 4G/LTE
          solution. Parallel Wireless Private LTE network solution provides
          secure and reliable connectivity that covers every inch of operations,
          for humans and machines (IoT) and software-upgradable to 5G.
          Applicable for all industries, it provides the secure, reliable,
          flexible and cost-effective wireless connectivity that business- and
          mission-critical applications demand.
        </p>
      </div>
      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-20">
        {/* 1 */}
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-start text-3xl mt-20">
            Features and Capabilities
          </h1>
          <p className="text-lg text-black mt-2">
            {" "}
            Parallel Wireless Private LTE is a converged, service-aware,
            mission-critical end-to-end architecture to deliver autonomy,
            efficiency and staff safety. Components include: <br /> <br />
          </p>
          <p className="text-lg ml-4 text-black">
            <span className="mr-10">
              {" "}
              •{"     "}A complete end-to-end LTE wireless broadband network —
              radio access (i.e. vessel, rig, platform, indoor, M2M), <br />{" "}
              <br />•{"     "}
              Backhaul for transport, core, devices and management <br />
            </span>
          </p>
          <p className="text-lg text-black mt-2">
            {" "}
            The components leverage the most advanced radio access technologies,
            including small cells and macro cells for maximum coverage and
            capacity to reach remote systems, vessels and enable safety for
            personnel. A common communications management system for the radio
            access network, backhaul and core along with lifecycle device
            management simplifies and reduces operating expenses while being
            interoperable with existing infrastructure. <br /> <br />
          </p>
          <button className="bg-orange-500 text-white font-bold py-3 px-4 rounded-xl flex flex-row mt-4  hover:bg-orange-600">
            VIEW FULL INFOGRAPHIC{" "}
          </button>
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
          <img src="/l1.jpg" alt="Image" className="w-full" />
        </div>
      </div>

      <div className="p-20">
        <h1 className="mt-8 text-black font-semibold text-3xl">
          Deployment Options
        </h1>
        <p className="text-lg text-black mt-2">
          {" "}
          The same solution can be deployed in both outdoor (fixed and
          in-vehicle) and indoor scenarios for specialized enterprise use cases:
          <br /> <br />
        </p>
        <p className="text-lg ml-4 text-black">
          <span className="mr-10">
            {" "}
            • Manufacturing and warehouses: Private LTE puts a manufacturing
            site’s network on a different frequency so robotic and IoT devices
            don’t have to compete for coverage. With priority and pre-emption,
            Parallel Wireless solution also can provide a higher quality of
            service for particular devices or voice traffic. <br />•{" "}
            Mining <br />  • Oil and Gas: Wi-Fi isn’t a robust or secure
            option to meet network needs, yet provisioning wires in remote
            locations or moving boats and motherships is challenging. With
            Parallel Wireless Private LTE as the primary WAN and satellite as
            the backhaul, the oil and gas industries have a secure LTE network
            that can keep everything and everyone connected, regardless of
            location. SON will assist with plug-n-play configuration and
            on-going hands free optimization while providing seamless mobility
            between boats and other moving vehicles. <br />
             • Campuses: Colleges, financial institutes and hospitals  <br />
          </span>
        </p>
        <p className="text-lg text-black mt-2">
          {" "}
          The deployments are flexible: the system can be deployed locally or in
          the cloud. <br /> <br /> The following services/features are provided
          by this solution:
        </p>
        <p className="text-lg ml-4 text-black">
          <span className="mr-10">
            • Enables a variety of voice options (VoLTE, VoWiFi) <br />
            • Interops with
            existing LMR/PMR or Wi-Fi networks<br /> • PTT (Push To Talk) that can
            integrate with DMR voice channels <br />• Staff can now carry an LTE
            handset rather than a legacy DMR handset <br />• M2M for pump, vessel
            health monitoring, easy vessel management, team tracking, etc.<br /> • Web
            browsing Localization of 4G calls <br />• Location based services<br /> •{" "}
            LMR/PMR and LTE interoperability<br /> • Dispatching<br /> • Multimedia
            streaming and sharing (video, picture, text)<br /> • Dual-band handsets
            could allow roaming onto consumer LTE networks • The solution will
            provide flexibility and elastic network:<br /> • In case of link failure
            to the cellular operator, the LTE circle will remain and provides
            all the above services locally<br /> • In case of emergency (such as
            backhaul loss, team trapped, etc.) PTT is available Easily
            movable/portable above ground towers when blasting; easy to
            re-deploy
          </span>
        </p>
      </div>
      <div className="flex flex-col p-14 justify-center text-center bg-gray-100 text-black text-3xl">
        <p>Download our Urban Solution Overview to learn more</p>
        <img src="/cloud.png" alt="" className="h-14 w-20  ml-[650px]" />
      </div>
      <div className="container relative">
        <img src="/l22.png" alt="" className="w-screen" />
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
