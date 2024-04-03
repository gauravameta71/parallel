import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-300 p-8"
      style={{
        backgroundImage: 'url("/bg.JPG")',
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-transparent">
        <div className="flex items-center  md:mb-0 bg-transparent">
          <img
            src="/Logo.svg"
            alt="Parallel Wireless"
            className="h-14 ml-[160px]"
          />
        </div>
      </div>
      <div className="mt-8 mr-[230px] bg-transparent">
        <div className="flex justify-end gap-20 bg-transparent">
          <div className="flex flex-col">
            <h1 className="text-black font-semibold text-xl mr-[200px]">
              Follow Us
            </h1>
            <div className="flex flex-row mt-2">
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
          </div>
          <div className="mt-[-6%]">
            <h2 className="text-black font-bold mb-4 text-xl bg-transparent">
              IMPORTANT LINKS
            </h2>
            <div className="container  mx-auto mt-2 border-t border-gray-700 pt-2 bg-transparent"></div>

            {/* 333333333333333 */}
            <div className="flex flex-row gap-40 bg-transparent">
              <div className="flex flex-col bg-transparent">
                <ul className="text-black bg-transparent">
                  <li className="mb-2 font-semibold bg-transparent">
                    <a href="#" className="hover:text-white">
                      Resources
                    </a>
                  </li>
                  <li className="mb-2 font-semibold">
                    <a href="#" className="hover:text-white">
                      Leadership
                    </a>
                  </li>
                  <li className="mb-2 font-semibold">
                    <a href="#" className="hover:text-white">
                      News
                    </a>
                  </li>
                  <li className="mb-2 font-semibold">
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li className="mb-2 font-semibold">
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col bg-transparent">
                <ul className="text-black ">
                  <li className="mb-2 font-semibold ">
                    <a href="#" className="hover:text-white ">
                      About
                    </a>
                  </li>
                  <li className="mb-2 font-semibold">
                    <a href="#" className="hover:text-white">
                      Solutions
                    </a>
                  </li>
                  <li className="mb-2 font-semibold">
                    <a href="#" className="hover:text-white">
                      Technologies
                    </a>
                  </li>
                  <li className="mb-2 font-semibold">
                    <a href="#" className="hover:text-white">
                      Products
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-[-6%]">
            <h2 className="text-black font-bold text-xl">CONTACT US</h2>
            <div className="container mx-auto mt-4 border-t border-gray-700 pt-2"></div>

            <p className="text-black mb-4 font-semibold">
              <i className="fas fa-phone-alt mr-2 "></i>1-603-589-9937
            </p>
            <p className="text-black font-semibold">
              <i className="fas fa-map-marker-alt mr-2 "></i>300 Innovative Way,
              Suite #2310, <br /> Nashua, NH 03062, USA
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start ml-20">
        <p className="text-black text-md font-semibold">
          © 2024 Parallel Wireless. All rights reserved. <br /> Privacy Policy |
          Legal | Cookies | Terms of Use | Trademarks | PO Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
