"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const [dropdownOpen5, setDropdownOpen5] = useState(false);
  const [dropdownOpen6, setDropdownOpen6] = useState(false);
  const [dropdownOpen7, setDropdownOpen7] = useState(false);
  const [dropdownOpen8, setDropdownOpen8] = useState(false);

  //For solutions
  const [dropdownHover, setDropdownHover] = useState(false);

  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  //  for Resources
  const [dropdownHover2, setDropdownHover2] = useState(false);

  const [dropdownTimeout2, setDropdownTimeout2] =
    useState<NodeJS.Timeout | null>(null);

  //  for company

  const [dropdownHover1, setDropdownHover1] = useState(false);

  const [dropdownTimeout1, setDropdownTimeout1] =
    useState<NodeJS.Timeout | null>(null);
  //  for Compant -> who we are

  const [dropdownHover3, setDropdownHover3] = useState(false);

  const [dropdownTimeout3, setDropdownTimeout3] =
    useState<NodeJS.Timeout | null>(null);

  //  for Compant -> news

  const [dropdownHover4, setDropdownHover4] = useState(false);

  const [dropdownTimeout4, setDropdownTimeout4] =
    useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (dropdownTimeout4) {
        clearTimeout(dropdownTimeout4);
      }
    };
  }, [dropdownTimeout4]);

  //  for Compant -> contact

  const [dropdownHover5, setDropdownHover5] = useState(false);

  const [dropdownTimeout5, setDropdownTimeout5] =
    useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (dropdownTimeout5) {
        clearTimeout(dropdownTimeout5);
      }
    };
  }, [dropdownTimeout5]);

  useEffect(() => {
    return () => {
      if (dropdownTimeout3) {
        clearTimeout(dropdownTimeout3);
      }
    };
  }, [dropdownTimeout3]);

  useEffect(() => {
    return () => {
      if (dropdownTimeout1) {
        clearTimeout(dropdownTimeout1);
      }
    };
  }, [dropdownTimeout1]);

  // for resources

  useEffect(() => {
    return () => {
      if (dropdownTimeout2) {
        clearTimeout(dropdownTimeout2);
      }
    };
  }, [dropdownTimeout2]);

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const toggleDropdown8 = () => {
    setDropdownOpen8(!dropdownOpen8);
  };

  // Add a new state to control the hover state of the dropdown

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleModal1 = () => {
    setModalOpen1(!modalOpen1);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!dropdownOpen3);
  };

  const toggleDropdown4 = () => {
    setDropdownOpen4(!dropdownOpen4);
  };
  const toggleDropdown5 = () => {
    setDropdownOpen5(!dropdownOpen5);
  };

  const toggleDropdown6 = () => {
    setDropdownOpen6(!dropdownOpen6);
  };
  const toggleDropdown7 = () => {
    setDropdownOpen7(!dropdownOpen7);
  };
  return (
    <div className="flex  text-black  h-28 s fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* LOGO */}
      <div className="mt-2 ml-24">
        <a href="/">
          <img src="/Logo.svg" alt="" className="h-24 w-[200px]" />
        </a>
      </div>

      <div className="text-black flex justify-end items-end flex-1 mb-10 gap-10">
        {/* Nav Links */}
        <ul className="flex gap-6 text-sm ">
          <li className="relative">
            <div
              className="group"
              onMouseEnter={() => setDropdownHover(true)}
              onMouseLeave={() => {
                // Set a timeout to hide the dropdown after a delay
                const timeout = setTimeout(() => {
                  setDropdownHover(false);
                }, 500); // Adjust the delay duration (in milliseconds) as needed
                setDropdownTimeout(timeout);
              }}
            >
              <Link href="/solutions" onClick={(e) => e.stopPropagation()}>
                <h1
                  onClick={toggleDropdown8}
                  className="cursor-pointer text-black transition-colors duration-300 hover:text-orange-500 group-hover:text-orange-500"
                >
                  Solutions
                </h1>
              </Link>
              <div className="bg-amber-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <input
              id="dropdown-open"
              type="checkbox"
              className="hidden"
              checked={dropdownOpen}
              onChange={toggleDropdown}
            />

            <div
              className={`${
                dropdownOpen || dropdownHover ? "block" : "hidden"
              } absolute mt-2 w-40 bg-white rounded-lg shadow-lg z-10 text-sm`}
              onMouseEnter={() => setDropdownHover(true)}
              onMouseLeave={() => setDropdownHover(false)}
            >
              <ul className="py-2">
                <li>
                  <Link
                    href="/urban"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                    onMouseEnter={() => setDropdownOpen(true)} // Keep the dropdown open when hovering over options
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    Urban
                  </Link>
                </li>
                <li>
                  <a
                    href="/rural"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                    onMouseEnter={() => setDropdownOpen(true)} // Keep the dropdown open when hovering over options
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    Rural
                  </a>
                </li>
                <li>
                  <a
                    href="/lte"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                    onMouseEnter={() => setDropdownOpen(true)} // Keep the dropdown open when hovering over options
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    LTE
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="#" className="group">
              <p className="" onClick={toggleModal1}>
                Products & Technologies
              </p>
              <div className="bg-amber-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          </li>

          <li>
            <a href="/customer" className="group">
              Customers
              <div className="bg-amber-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          </li>

          <li className="relative">
            <div
              className="group"
              onMouseEnter={() => setDropdownHover1(true)}
              onMouseLeave={() => {
                // Set a timeout to hide the dropdown after a delay
                const timeout = setTimeout(() => {
                  setDropdownHover1(false);
                }, 3000); // Adjust the delay duration (in milliseconds) as needed
                setDropdownTimeout1(timeout);
              }}
            >
              <a
                href="/company"
                onClick={toggleDropdown1}
                className="cursor-pointer text-black transition-colors duration-300 hover:text-orange-500 group-hover:text-orange-500"
              >
                Company
              </a>
              <div className="bg-amber-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <input
              id="dropdown-open"
              type="checkbox"
              className="hidden"
              checked={dropdownOpen1}
              onChange={toggleDropdown1}
            />

            <div
              className={`${
                dropdownOpen1 || dropdownHover1 ? "block" : "hidden"
              } absolute mt-2 w-40 bg-white rounded-lg shadow-lg z-10 text-sm`}
              onMouseEnter={() => setDropdownHover1(true)}
              onMouseLeave={() => setDropdownHover1(false)}
            >
              <ul className="py-2">
                <li className="relative">
                  <div className="group ">
                    <div
                      onMouseEnter={() => setDropdownHover3(true)}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setDropdownHover3(false);
                        }, 1000);
                        setDropdownTimeout3(timeout);
                      }}
                    >
                      <a
                        href="/whoweare"
                        className="flex justify-between items-center px-4 py-2 text-gray-800 hover:text-orange-400 group "
                        onClick={toggleDropdown3}
                      >
                        Who We Are? →
                        <span className="-mr-1 ml-2 transition duration-300 group-focus:-rotate-180">
                          {/* SVG icon */}
                        </span>
                      </a>
                    </div>
                    <ul
                      className={`${
                        dropdownOpen3 || dropdownHover3 ? "block" : "hidden"
                      } absolute mt-[-40px] ml-40 w-40 bg-white rounded-lg shadow-lg z-10 text-sm`}
                      onMouseEnter={() => setDropdownHover1(true)}
                      onMouseLeave={() => setDropdownHover1(false)}
                    >
                      <li>
                        <a
                          href="/mission"
                          className="block px-2 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Mission and Vision
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="relative">
                  <div className="group ">
                    <div
                      onMouseEnter={() => setDropdownHover4(true)}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setDropdownHover4(false);
                        }, 1000);
                        setDropdownTimeout4(timeout);
                      }}
                    >
                      <a
                        href="news"
                        className="flex justify-between items-center px-4 py-2 text-gray-800 hover:text-orange-400 group "
                        onClick={toggleDropdown4}
                      >
                        News →
                        <span className="-mr-1 ml-2 transition duration-300 group-focus:-rotate-180">
                          {/* SVG icon */}
                        </span>
                      </a>
                    </div>
                    <ul
                      className={`${
                        dropdownOpen4 || dropdownHover4 ? "block" : "hidden"
                      } absolute mt-[-40px] ml-40 w-40 bg-white rounded-lg shadow-lg z-10 text-sm`}
                      onMouseEnter={() => setDropdownHover1(true)}
                      onMouseLeave={() => setDropdownHover1(false)}
                    >
                      <li>
                        <a
                          href="/pressRelease"
                          className="block px-2 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Press Realeases
                        </a>
                      </li>
                      <li>
                        <a
                          href="/newsCoverage"
                          className="block px-2 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          News Coverage
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="leadership"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="awards"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Awards
                  </a>
                </li>
                <li className="relative">
                  <div className="group ">
                    <div
                      onMouseEnter={() => setDropdownHover5(true)}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setDropdownHover5(false);
                        }, 1000);
                        setDropdownTimeout5(timeout);
                      }}
                    >
                      <a
                        href="contact"
                        className="flex justify-between items-center px-4 py-2 text-gray-800 hover:text-orange-400 group "
                        onClick={toggleDropdown5}
                      >
                        Contact →
                        <span className="-mr-1 ml-2 transition duration-300 group-focus:-rotate-180">
                          {/* SVG icon */}
                        </span>
                      </a>
                    </div>
                    <ul
                      className={`${
                        dropdownOpen5 || dropdownHover5 ? "block" : "hidden"
                      } absolute mt-[-40px] ml-40 w-40 bg-white rounded-lg shadow-lg z-10 text-sm`}
                      onMouseEnter={() => setDropdownHover1(true)}
                      onMouseLeave={() => setDropdownHover1(false)}
                    >
                      <li>
                        <a
                          href="/support"
                          className="block px-2 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="/partners"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="legal"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Legal
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/career" className="group">
              Careers
              <div className="bg-amber-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          </li>
          <li>
            <div
              className="group"
              onMouseEnter={() => setDropdownHover2(true)}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setDropdownHover2(false);
                }, 2000);
                setDropdownTimeout2(timeout);
              }}
            >
              <a
                href="/resources"
                onClick={toggleDropdown2}
                className="cursor-pointer text-black transition-colors duration-300 hover:text-orange-500 group-hover:text-orange-500"
              >
                Resources
              </a>
              <div className="bg-amber-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <input
              id="dropdown-open"
              type="checkbox"
              className="hidden"
              checked={dropdownOpen2}
              onChange={toggleDropdown2}
            />

            <div
              className={`${
                dropdownOpen2 || dropdownHover2 ? "block" : "hidden"
              } absolute mt-2 w-40 bg-white rounded-lg shadow-lg z-10 text-sm`}
              onMouseEnter={() => setDropdownHover2(true)}
              onMouseLeave={() => setDropdownHover2(false)}
            >
              <ul className="py-2">
                <li>
                  <a
                    href="/white_papers"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    White Papers
                  </a>
                </li>
                <li>
                  <a
                    href="/solution_overview"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Solution Overview
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/ParallelWireless/about"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="case_studies"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/webinar"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    Webinar
                  </a>
                </li>
                <li>
                  <a
                    href="/open_ran"
                    className="block px-4 py-2 text-gray-800 hover:text-orange-400"
                  >
                    OpenRAN
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* Search Icon */}
        <Link href="/">
          <img
            src="/search.png"
            alt=""
            className="h-5 w-5 mb-1 "
            onClick={toggleModal}
          />
        </Link>
        {/* Modal */}
        <div>
          <div
            id="default-modal"
            className={`${
              modalOpen
                ? "fixed inset-0 flex justify-end pt-[100px] pr-[220px] z-50 "
                : "hidden"
            }`}
          >
            <div className=" border-2 h-[94px] rounded-lg">
              <div className=" bg-white rounded-lg shadow dark:white">
                <div className="flex  p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <div className="flex flex-row ">
                    <input type="text" className="border-2" />
                    <button
                      className="bg-orange-500 text-white hover:bg-white-500  border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-bold py-3 px-4 rounded-xl ml-4 "
                      type="button"
                    >
                      SEARCH
                    </button>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={toggleModal}
                    type="button"
                    className=" rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:text-orange-400"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 2 */}
          <div>
            <div
              id="default-modal"
              className={`${
                modalOpen1
                  ? "fixed inset-0 flex justify-end pt-[100px] z-50 "
                  : "hidden"
              }`}
            >
              <div className=" w-screen mt-[12px]  ">
                <div className=" bg-gray-100 h-[410px] shadow dark:white">
                  <div className="flex  p-4 md:p-5 ">
                    <div className="flex flex-row ">
                      <div className="flex flex-row text-black">
                        {/* 1 */}
                        <div className="flex flex-col p-10 text-sm">
                          <h1 className="text-xl font-semibold">
                            Technologies
                          </h1>
                          <ul>
                            <li className="m-2 hover:text-orange-400">5G</li>
                            <li className="m-2 hover:text-orange-400">4G</li>
                            <li className="m-2 hover:text-orange-400">3G</li>
                            <li className="m-2 hover:text-orange-400">2G</li>
                          </ul>
                        </div>
                        {/* 1 */}
                        {/* 2 */}
                        <div className="flex flex-col p-10 text-sm">
                          <h1 className="text-xl font-semibold">Products</h1>
                          <ul>
                            <li className="m-2 font-bold hover:text-orange-400">
                              ACCESS:OpenRAN
                            </li>
                            <li className="m-2 hover:text-orange-400 w-[200px]">
                              Software-defined Open vRAN
                            </li>
                            <li className="m-2 hover:text-orange-400">3G</li>
                            <li className="m-2 hover:text-orange-400">
                              5G OpenRAN
                            </li>
                          </ul>
                        </div>
                        {/* 2 */}
                        {/* 3 */}
                        <div className="flex flex-col p-10 mt-10 text-sm">
                          <h1 className="text-lg font-semibold w-[180px]">
                            Network Software
                          </h1>
                          <ul>
                            <li className="relative">
                              <div className="group ">
                                <div
                                  className="group transition-shadow"
                                  onMouseEnter={toggleDropdown6}
                                  onMouseLeave={toggleDropdown6}
                                >
                                  <a
                                    href="#"
                                    className="flex pl-2 text-gray-800 hover:text-orange-400 group "
                                    onClick={toggleDropdown6}
                                  >
                                    Interoperable →
                                    <span className="-mr-1 ml-2 transition duration-300 group-focus:-rotate-180">
                                      {/* SVG icon */}
                                    </span>
                                  </a>
                                </div>
                                <ul
                                  className={`${
                                    dropdownOpen6 ? "block" : "hidden"
                                  } absolute top-0 ml-[130px] mb-14 w-40 bg-gray-100 rounded-sm shadow-lg z-10 text-sm`}
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-2 py-2 text-gray-800 hover:text-orange-400"
                                    >
                                      Open RAN Controller
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="m-2 hover:text-orange-400">
                              Unified
                            </li>
                            <li className="m-2 hover:text-orange-400">
                              Cloud Native
                            </li>
                            <li className="m-2 hover:text-orange-400">
                              End-to-End
                            </li>
                            <li className="m-2 hover:text-orange-400">
                              Perfomance
                            </li>
                            <li className="relative">
                              <div className="group ">
                                <div
                                  className="group"
                                  onMouseEnter={toggleDropdown7}
                                  onMouseLeave={toggleDropdown7}
                                >
                                  <a
                                    href="#"
                                    className=" flex pl-2 w-[200px] text-gray-800 hover:text-orange-400 group "
                                    onClick={toggleDropdown7}
                                  >
                                    Multi-tenet & Sharing →
                                    <span className="-mr-1 ml-2 transition duration-300 group-focus:-rotate-180">
                                      {/* SVG icon */}
                                    </span>
                                  </a>
                                </div>
                                <ul
                                  className={`${
                                    dropdownOpen7 ? "block" : "hidden"
                                  } absolute top-0 left-full  w-40 bg-gray-100 rounded-sm shadow-lg z-10 text-sm`}
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-2 py-2 text-gray-800 hover:text-orange-400"
                                    >
                                      MOCN
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-2 py-2 text-gray-800 hover:text-orange-400"
                                    >
                                      MORON
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* 3 */}

                        {/* 4 */}
                        <div className="flex flex-col p-10 mt-10 text-sm">
                          <h1 className="text-lg font-semibold w-[180px]">
                            Network Intelligence
                          </h1>
                          <ul className="w-[190px">
                            <li className="pl-2 hover:text-orange-400">
                              Analytic
                            </li>
                            <li className="m-2 hover:text-orange-400">
                              Real-Time ALL G SON
                            </li>
                            <li className="m-2 hover:text-orange-400">
                              Network Orchestrator
                            </li>
                          </ul>
                        </div>
                        {/* 4 */}
                        {/* 5 */}
                        <div className="flex flex-col p-10 relative">
                          <img src="/image1.jpg" alt="" className="" />
                          <a
                            href="#"
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                          >
                            <p className="font-bold text-white pt-[150px] pr-[150px] hover:underline">
                              RESOURCES →
                            </p>
                          </a>
                        </div>

                        {/*  5*/}
                      </div>
                    </div>

                    {/* Close button */}
                    <button
                      onClick={toggleModal1}
                      type="button"
                      className=" rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:text-orange-400 mt-2"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
      </div>

      <div className="mr-10 mt-[35px]">
        <a href="/contact_us">
          {" "}
          <button
            className="bg-white hover:bg-orange-500 text-orange-500 border-2 border-orange-500 hover:text-white font-bold py-2 px-4 rounded-xl mr-2  "
            type="button"
          >
            CONTACT US
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
