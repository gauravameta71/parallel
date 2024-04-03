"use client"
import React, { useRef } from "react";

const Slider = () => {
  const carouselRef = useRef(null);

  const scrollTo = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="carousel flex w-full overflow-x-auto"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div id="slide1" className="carousel-item flex-none relative w-screen">
          <img src="/hero.jpg" className="w-full h-[540px]" alt="Slide 1" />
          <button
            className="absolute inset-0 flex  justify-start   pt-[295px] pl-[90px]  bg-opacity-50 hover:bg-opacity-75 text-white text-xl font-bold"
            onClick={() => console.log("Button on Slide 1 clicked")}
          >
            <span className="bg-orange-500 text-white hover:bg-white-500 text-sm border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-bold py-2.5 px-4 rounded-xl">
              Learn More
            </span>
          </button>
        </div>
        <div id="slide2" className="carousel-item flex-none w-screen">
          <img src="" className="w-full" alt="Slide 2" />
        </div>
      </div>
      <button
        className="absolute inset-y-0 left-0 flex items-center justify-center w-8  rounded-full bg-opacity-50 hover:bg-opacity-75"
        onClick={() => scrollTo(-window.innerWidth)}
      >
        <span className="bg-gray-50 rounded-full w-8 h-8 pt-[4px] text-black">
          ←
        </span>
      </button>
      <button
        className="absolute inset-y-0 right-0 flex items-center justify-center w-8  bg-opacity-50 hover:bg-opacity-75"
        onClick={() => scrollTo(window.innerWidth)}
      >
        {" "}
        <span className="bg-gray-50 rounded-full w-8 h-8 pt-[4px] text-black">
          {" "}
          →
        </span>
      </button>
    </div>
  );
};

export default Slider;
