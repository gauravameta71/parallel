"use client";
import React, { useEffect, useState } from "react";

const page = () => {
     const [currentSlide, setCurrentSlide] = useState(0);

     useEffect(() => {
       const carousel = document.getElementById("default-carousel");
       const carouselItems = Array.from(
         carousel.querySelectorAll("[data-carousel-item]")
       );
       const prevButton = carousel.querySelector("[data-carousel-prev]");
       const nextButton = carousel.querySelector("[data-carousel-next]");
       const indicatorButtons = Array.from(
         carousel.querySelectorAll("[data-carousel-slide-to]")
       );

       const showSlide = (n) => {
         carouselItems.forEach((item, index) => {
           if (index === n) {
             item.classList.remove("hidden");
           } else {
             item.classList.add("hidden");
           }
         });
         indicatorButtons.forEach((button, index) => {
           if (index === n) {
             button.classList.add("bg-orange-500");
           } else {
             button.classList.remove("bg-orange-500");
           }
         });
       };

       const nextSlide = () => {
         setCurrentSlide((currentSlide + 1) % carouselItems.length);
       };

       const prevSlide = () => {
         setCurrentSlide(
           (currentSlide - 1 + carouselItems.length) % carouselItems.length
         );
       };

       const goToSlide = (n) => {
         setCurrentSlide(n);
       };

       prevButton.addEventListener("click", prevSlide);
       nextButton.addEventListener("click", nextSlide);
       indicatorButtons.forEach((button, index) => {
         button.addEventListener("click", () => goToSlide(index));
       });

       showSlide(currentSlide);

       return () => {
         prevButton.removeEventListener("click", prevSlide);
         nextButton.removeEventListener("click", nextSlide);
         indicatorButtons.forEach((button) => {
           button.removeEventListener("click", () => goToSlide(index));
         });
       };
     }, [currentSlide]);

  return (
    <div className="bg-white">
      <div className="bg-gray-300 h-64 w-screen text-center p-10 ">
        <h1 className="text-black text-5xl text semibold mt-28">
          Careers at Parallel Wireless
        </h1>
      </div>
      {/* 1 */}
      <div className="flex items-center justify-between bg-white pl-20 pr-20 pt-20">
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-3xl">
            We’re disrupting, challenging, and leading the future of
            telecommunications.
          </h1>
          <p className="text-lg text-black">
            Parallel Wireless is making a big difference for Mobile Network
            Operators (MNOs) across the globe as they move toward a secure,
            cloud-enabled, digital future built on Open RAN technology, and our
            teams from around the world are all in. There’s no better time to
            join Parallel Wireless to lead the disruption in wireless networks
            and propel your future.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-Disrupting.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>
      {/* 2 */}
      <div className="flex items-center justify-between bg-white pr-20 pl-20 ">
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-Technology.jpg"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-black text-3xl">
            Technology that delivers wireless connectivity, so all people can be
            connected whenever, wherever, and however they choose.
          </h1>
          <p className="text-lg text-black">
            At Parallel Wireless, you’ll have a unique opportunity to reimagine
            the boundaries of what’s possible in telecommunications. As part of
            the Open RAN movement, you’ll help develop innovative products and
            solutions by leveraging open interfaces, thus enabling
            cost-effective, agile, and scalable mobile networks from 2G, 3G and
            4G to 5G and beyond.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="flex items-center justify-between bg-white pl-20 pr-20  pb-6">
        <div className="w-1/2 pr-4">
          <h1 className="text-black text-3xl">We Are #TeamParallelWireless</h1>
          <p className="text-lg text-black">
            What do we value most? Our people, our technology, and reimagining
            the world – together. You’ll be part of a team, all driven to go
            beyond the status quo to reimagine what comes next. This is the
            #TeamParallelWireless story, and we’re just getting started.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://www.parallelwireless.com/wp-content/uploads/WhatsApp-Image-2023-12-17-at-13.57.21-585x415.jpeg"
            alt="Image"
            className="w-full"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center p-12">
        <button className="  hover:bg-opacity-75 text-white text-xl font-bold">
          <span className="bg-orange-500 text-white hover:bg-white-500 text-sm border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-bold py-2.5 px-4 rounded-xl">
            Explore Oppoturnity
          </span>
        </button>
        <hr className="w-[90%] h-1 mt-6 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-orange-500" />
      </div>
      {/* Cards */}
      <div className=" bg-white p-12">
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white overflow-hidden">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-EmployeeProgram-350x295.png"
              alt="Placeholder"
              className=" h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4 pl-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Employee Programs
              </h3>
              <p className="text-gray-700 text-lg">
                Our programs are global but delivered regionally ensuring every
                employee receives a tailored, individual development plan to get
                you to be the best version of yourself. We celebrate our wins
                with recognition (Spot Awards) and time off to give back to your
                community.
              </p>
            </div>
          </div>
          <div className="bg-white  overflow-hidden">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-ComprehensiveBenefits-350x295.jpg"
              alt="Placeholder"
              className="h-72 w-full  hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
            />
            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Comprehensive Benefits
              </h3>
              <p className="text-gray-700 text-lg">
                Our benefits are competitive and designed to foster and
                encourage good health, peace of mind, and long- term financial
                security for our team members around the globe.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-GrowthLifesytle-large-350x295.jpg"
              alt="Placeholder"
              className="h-72 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300 "
            />

            <div className="p-4">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Growth and Lifestyle
              </h3>
              <p className="text-gray-700 text-lg">
                We support you with everything from flexible/remote working
                arrangements, a comprehensive global mobility program to support
                your career growth, and paid time off so you have time to rest
                and recharge!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="text-center text-black text-3xl flex flex-col p-12">
        <h1 className="">
          Our team is “All In” and vested to achieve amazing growth as we
          transform the wireless broadband industry.
        </h1>
        <a href="">
          <p className="text-3xl font-bold text-orange-500 mt-6 hover:underline">
            Join Us!
          </p>
        </a>

        <hr className="w-[90%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-orange-500" />
      </div>
      {/* text row */}

      <div className="flex flex-row p-12 gap-12 text-black justify-center text-center">
        <div className="text-black flex flex-col w-1/2">
          <h1 className="text-3xl font-semibold">OUR VISION</h1>
          <p className="text-xl">
            To reimagine the wireless network so all people can be connected
            whenever, wherever, and however they choose.
          </p>
        </div>
        <div className="text-black flex flex-col w-1/2">
          <h1 className="text-3xl font-semibold">OUR MISSION </h1>
          <p className="text-xl ">
            To deliver innovative products that unlock value and disrupt the
            economics of wireless networks through intelligence and openness.
            Our customers’ success is our success.
          </p>
        </div>
      </div>
      {/* Carousel
       */}

<h1 className="text-center text-black text-4xl">Core Values</h1>
      <div
        id="default-carousel"
        className="relative p-12 "
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative  overflow-hidden rounded-lg ml-[330px] mr-[330px]">
          {/* <!-- Item 1 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Collaborative.jpg"
              className="w-full h-full object-cover"
              alt="Image 1"
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Customercentric.jpg"
              className="w-full h-full object-cover"
              alt="Image 2"
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Driven.jpg"
              className="w-full h-full object-cover"
              alt="Image 3"
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Innovative.jpg"
              className="w-full h-full object-cover"
              alt="Image 4"
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Open.jpg"
              className="w-full h-full object-cover"
              alt="Image 5"
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30  flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-orange-500 border-2"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full border-2"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full border-2"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full border-2"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full border-2"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg> */}
            {/* <span className="sr-only">Previous</span> */}
          {/* </span> */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span> */}
        </button>
      </div>
    </div>
  );
}

export default page