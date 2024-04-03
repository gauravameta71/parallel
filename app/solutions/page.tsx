import React from 'react'
import SecOne from '../components/SecOne';
import SecTwo from '../components/SecTwo';
import SecThree from '../components/SecThree';
import SecFour from '../components/SecFour';
import SecFive from '../components/SecFive';

const page = () => {
  return (
    <div className="bg-white">
      <img src="/solutions.jpg" alt="" className="w-screen h-74" />
      
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-6xl text-black bg-gray-100 opacity-70 h-20 mt-[395px]">
        <span className="text-black">Solutions</span>
      </h1>
      <h1 className="flex text-4xl text-black justify-center p-2 pt-8">
        Reimagine Your Network.
      </h1>
      <h1 className="flex text-4xl text-black justify-center p-2">
        Reimagine Your Economics
      </h1>

      <p className="flex text-lg text-center  text-black justify-center p-4 ml-40 mr-40">
        Parallel Wireless created world’s only 5G 4G 3G 2G OpenRAN architecture
        to make delivery of wireless coverage or capacity use cases, especially
        capital intensive 5G, affordable as it enables mobile operators and
        industries to unleash the full value of connectivity. With unified
        across 5G 4G 3G 2G cloud-native architecture that is open and
        standardized across five key domains – RAN, Edge, Core, Orchestration
        and Analytics – we are committed to 5G vision of bringing Internet to
        every person and organization for a truly connected world. The company’s
        end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our
        customers modernize their networks, reduce deployment cost and
        complexity, increase operational efficiency, find new revenue streams
        and start deploying multi-vendor 5G networks today.
      </p>
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />

      <div className="flex flex-col p-14 justify-center text-center bg-gray-100 text-black text-3xl">
        <p>
          Find out how we help our customers roll out services faster and reduce
          OPEX by visiting our resources page to download data sheets and
          solution overviews or watch customer videos or webinar recordings.
        </p>
        <img src="/cloud.png" alt="" className="h-14 w-20  ml-[650px]" />
      </div>
    </div>
  );
}

export default page