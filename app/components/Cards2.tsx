// components/ImageCardRow.js
const ImageCardRow = () => {
  return (
    <div className=" bg-white p-6">
      <h1 className="text-black font-bold flex justify-center text-3xl mb-4">
        Our Products
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white overflow-hidden border-2">
          <img
            src="/cc1.jpg"
            alt="Placeholder"
            className=" h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
          />
          <div className="p-4 ml-4">
            <h3 className="text-2xl text-black font-semibold mb-2">
              Access: OpenRAN
            </h3>
            <p className="text-gray-700 text-lg">
              Our OpenRAN hardware ecosystem consists of macros, outdoor and
              indoor small cells, and Massive MIMOs that are all Software
              Defined Radios (SDRs) and can be software upgraded to 5G for ease
              of deployment and much lower cost.
            </p>

            <button
              className="bg-orange-500 text-white hover:bg-white-500  border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-bold py-2 px-4 rounded-xl mt-4"
              type="button"
            >
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="bg-white  overflow-hidden border-2">
          <img
            src="/cc2.jpg"
            alt="Placeholder"
            className="h-72 w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
          />
          <div className="p-4">
            <h3 className="text-2xl text-black font-semibold mb-2">
              Network Software
            </h3>
            <p className="text-gray-700 text-lg">
              Our software platforms provide RAN and core services,
              orchestration, programmability, and service assurance including
              analytics and monitoring to deliver business agility, TCO
              reduction and to enable new revenue opportunities.
            </p>
           <button
              className="bg-orange-500 text-white hover:bg-white-500  border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-bold py-2 px-4 rounded-xl mt-4"
              type="button"
            >
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="bg-white overflow-hidden border-2">
          <img
            src="/cc3.jpg"
            alt="Placeholder"
            className="h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
          />

          <div className="p-4">
            <h3 className="text-2xl text-black font-semibold mb-2">
              Intelligence and Automation
            </h3>
            <p className="text-gray-700 text-lg">
              Network automation and intelligence software across ALL Gs for
              outdoor and indoor delivers TCO savings with self-configuration
              and self-optimization to enable optimal subscriber experience.
            </p>
            <button
              className="bg-orange-500 text-white hover:bg-white-500  border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-bold py-2 px-4 rounded-xl mt-4"
              type="button"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardRow;





