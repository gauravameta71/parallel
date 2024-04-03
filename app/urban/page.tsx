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
        <span className="text-black">Urban solution</span>
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
          Global Mobile Network Operators (MNOs) are upgrading their networks in
          urban and dense urban environments to enable faster service and meet
          the growing digital demands of the future. To do so, they must ensure
          high quality of service (QoS) and a consistent end-user experience
          everywhere and at any time, especially during peak usage hours.
        </p>
        <h1 className="mt-4 text-black font-semibold text-3xl">
          Expand and Modernize Your Networks
        </h1>
        <p className="text-xl mt-6 text-black text-start ml-40 mr-40">
          Our Urban Solution allows MNOs to expand and modernize their networks
          with an urban-ready, ALL G, Open RAN solution which is O-RAN Alliance
          compliant running on 7.2 radios. Our solution is easy to install,
          high-performing and reduces Total Cost of Ownership (TCO) while
          simplifying maintenance and enabling a broad ecosystem of partners.
        </p>
        <img
          src="/u1.jpg"
          alt=""
          className="mt-8 flex justify-center items-cente ml-[450px] h-96 w-[530px]"
        />
        <p className="text-xl mt-6 text-black text-start ml-40 mr-40">
          Global Mobile Network Operators (MNOs) are upgrading their networks in
          urban and dense urban environments to enable faster service and meet
          the growing digital demands of the future. To do so, they must ensure
          high quality of service (QoS) and a consistent end-user experience
          everywhere and at any time, especially during peak usage hours. Expand
          and Modernize Your Networks Our Urban Solution allows MNOs to expand
          and modernize their networks with an urban-ready, ALL G, Open RAN
          solution which is O-RAN Alliance compliant running on 7.2 radios. Our
          solution is easy to install, high-performing and reduces Total Cost of
          Ownership (TCO) while simplifying maintenance and enabling a broad
          ecosystem of partners. Single-Cell-Urban_Infographic-02 With
          commercial-off-the-shelf (COTS) vBBU hardware our Urban Solution
          enables Open RAN radios, resource orchestration, network slicing and
          subscriber management across All Gs – 2G, 3G, 4G, 5G and beyond. Our
          solution has advanced through the 3GPP and O-RAN Alliance release
          roadmap and is supporting the foundational features and capabilities
          for strong network performance in high-capacity urban environments.
        </p>
        <h1 className="mt-14 text-black text-start font-semibold text-3xl ">
          Features and Capabilities
        </h1>
        <p className="text-lg mt-6 text-black text-start  mr-40">
          Our Urban Solution is an agile, software-based approach to RAN
          infrastructure, which is designed to allow MNOs to quickly deploy
          network upgrades at a lower TCO. The following describes the features
          and benefits of our state-of-the-art Urban Solution: <br />
          <br /> • <span className="text-black font-bold">Innovate –</span>{" "}
          Proprietary interfaces and limited flexibility with legacy suppliers
          make it challenging for MNOs to maintain, expand, and upgrade their
          networks to meet future demands. With our Parallel Wireless Urban
          solution, MNOs can avoid vendor lock-in, scale and enable new
          innovative services seamlessly with cloud-native centralized tools
          such as Continuous Integration/Continuous Delivery (CI/CD), DevOps,
          Artificial Intelligence (AI) and Machine Learning (ML).
          <br />
          <br /> •
          <span className="text-black font-bold">
            Futureproof for 5G –
          </span>{" "}
          MNOs need to upgrade their networks to prepare for the explosive data
          demands such as Internet of Things (IoT), Industry 4.0, autonomous
          driving, and digital health. With our Urban solution MNOs can upgrade
          their networks to any G with a commercial-off-the-shelf (COTS) vBBU
          which is easy to install, has open interfaces and supports a broad
          ecosystem of vendors across 2G, 3G, 4G and 5G, preparing networks for
          the future. Easy to install, modernize and expand networks – The costs
          to deploy and maintain networks and the lack of interoperability can
          be daunting as many operators are supporting 2G voice while migrating
          to 4G data and preparing for the greater bandwidth possibilities of
          5G. Easily change and upgrade technologies to support emerging needs
          with our cloud-native software-based solution. <br />
          <br />•
          <span className="text-black font-bold">
            Reduce Total Cost of Ownership (TCO) –{" "}
          </span>{" "}
          Network Operations Center (NOC), zoning and permits, management
          services, power and backhaul, are a few of the many expenses required
          to maintain and upgrade networks. A cloud-native, software-defined
          architecture with state-of-the art features such as RAN automation,
          self-configuration, hands free software testing, integration and
          delivery drives down costs and improves interoperability. A container
          based DU/CU implementation across ALL Gs, enables faster
          time-to-market for new services and features enabling OPEX and CAPEX
          savings. <br />
          <br /> •{" "}
          <span className="text-black font-bold">
            Enhance end user experience –{" "}
          </span>{" "}
          MNOs need to deliver a high quality and consistent experience
          everywhere, and all times, including during peak usage hours in
          high-capacity urban environments. Artificial Intelligence (AI) and
          Machine Learning (ML) enable seamless software upgrades utilizing data
          to optimize network performance in urban environments, delivering
          optimal subscriber throughput and quality of service. With open
          non-proprietary interfaces, the Parallel Wireless Urban Solution
          addresses network overloads during high peak hours, ensuring
          ubiquitous coverage, enabling state-of-the-art applications such as
          IoT, and exceeding customer expectations.
        </p>
        <h1 className="mt-14 text-black text-start font-semibold text-3xl">
          Deployment Scenarios
        </h1>
        <p className="text-lg mt-6 text-black  text-start  mr-40">
          Mobile Network Operators must have flexibility with network
          deployments while simultaneously keeping Capital Expenses (CAPEX) and
          Operating Expenses (OPEX) down, which is extremely important in
          high-capacity, dense urban environments. Our Urban Solution is ALL G,
          O-RAN compliant and enables cost conscious mobile operators to
          overcome deployment barriers while meeting necessary targets of
          generating new revenue, improving end user experience, reducing TCO
          and making their networks future-proof. <br /> <br /> With our lean
          Open RAN cloud-native software solution on a modest server and Open
          RAN automation with DevOps and CI/CD, network upgrades and software
          updates are easier and faster to roll out, thus improving TCO.
          Multi-vendor and multi-operator support allows flexible deployments
          even in the most difficult urban locations.
        </p>
        <h1 className="mt-20 text-black text-start font-semibold text-3xl">
          Deployment Options Include:
        </h1>
        <p className="text-lg mt-6 text-black  text-start  mr-40">
          <span className="text-black font-semibold">Integrated –</span> Enables
          2G, 3G, 4G from the same base station with upgrades to 5G. This
          deployment option provides the lowest power consumption for multi-mode
          operation. Parallel Wireless has had successfully integrated
          deployments with customers, MTN, Optus and Vodafone Turkey. <br />{" "}
          <br />
          <span className="text-black font-semibold">
            Urban, Suburban and Rural (split 7, 8) –
          </span>{" "}
          This deployment option supports three environments, Urban, Suburban
          and Rural, and enables ALL Gs from the same base station and is
          software upgradeable to 5G. This option includes pooled server
          capacity with a COTS vBBU and is upgradeable to accommodate other
          splits. Parallel Wireless has successfully worked with Inland
          Cellular, and Vodafone Turkey and Ireland implementing Urban, Suburban
          and Rural deployments. <br /> <br />
          Our Urban Solution is the first O-RAN Alliance compliant Open RAN
          solution supporting all generations of networks, from 2G, 3G, 4G and
          5G on 7.2 radios. With open, non-proprietary interfaces that address
          network overloads during high peak hours, ensuring ubiquitous
          coverage, faster speeds, and lower latency, the Urban Solution enables
          digital transformations preparing networks for the future.
        </p>
      </div>
      <div className="flex flex-col p-14 justify-center text-center bg-gray-100 text-black text-3xl">
        <p>Download our Urban Solution Overview to learn more</p>
        <img src="/cloud.png" alt="" className="h-14 w-20  ml-[650px]" />
      </div>
    </div>
  );
};

export default page;
