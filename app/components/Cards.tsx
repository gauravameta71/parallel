// components/ImageCardRow.js
const ImageCardRow = () => {
  return (
    <div className=" bg-white p-40">
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white overflow-hidden">
          <img
            src="/c1.jpg"
            alt="Placeholder"
            className=" h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
          />
          <div className="p-4 pl-4">
            <h3 className="text-2xl text-black font-semibold mb-2">
              Reimagine Coverage
            </h3>
            <p className="text-gray-700 text-lg">
              Parallel Wireless OpenRAN supports indoor or outdoor deployment
              scenarios at the lowest TCO and can be deployed on an accelerated
              timeline to help mobile operators deliver coverage everywhere from
              rural to suburban to most dense urban.
            </p>

            <p className="text-2xl text-orange-500 font-bold pt-8 hover:underline hover:text-orange-300">
              {" "}
              Learn more →
            </p>
          </div>
        </div>
        <div className="bg-white  overflow-hidden">
          <img
            src="/c2.jpg"
            alt="Placeholder"
            className="h-72 w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
          />
          <div className="p-4">
            <h3 className="text-2xl text-black font-semibold mb-2">
              Reimagine Capacity
            </h3>
            <p className="text-gray-700 text-lg">
              Easy to install, low-cost and high-performing cloud-native
              Parallel Wireless Open RAN supports macro, Massive MIMO or small
              cell deployments for densification and delivers superior end user
              QoS for consumers and industries in urban scenarios.
            </p>
            <p className="text-2xl text-orange-500 font-bold pt-8 hover:text-orange-300">
              {" "}
              Learn more →
            </p>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <img
            src="/c3.jpg"
            alt="Placeholder"
            className="h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
          />

          <div className="p-4">
            <h3 className="text-2xl text-black font-semibold mb-2">
              Reimagine 5G and Beyo text-lgnd
            </h3>
            <p className="text-gray-700 text-lg">
              Parallel Wireless cloud-native ORAN approach enables any 5G
              migration option and is software upgradable to any future 3GPP
              releases delivering the most cost-effective, easy to deploy, and
              advanced 5G capabilities for all 5G use cases.
            </p>
            <p className="text-2xl text-orange-500 font-bold pt-8 hover:text-orange-300">
              {" "}
              Learn more →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardRow;
