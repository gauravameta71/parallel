import React from "react";

const Brands = () => {
  return (
    <div
      class="flex overflow-hidden space-x-16 group h-[200px] p-[75px]"
      style={{
        backgroundImage: 'url("/bg.JPG")',
        backgroundSize: "cover",
      }}
    >
      <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
        <img loading="lazy" src="b1.jpg" class="max-w-none" alt="Image 1" />
        <img loading="lazy" src="b2.jpg" class="max-w-none" alt="Image 2" />
        <img loading="lazy" src="b3.jpg" class="max-w-none" alt="Image 3" />
        <img loading="lazy" src="b4.jpg" class="max-w-none" alt="Image 4" />
        <img loading="lazy" src="b5.jpg" class="max-w-none" alt="Image 5" />
        <img loading="lazy" src="b6.jpg" class="max-w-none" alt="Image 6" />
      </div>
      <div
        class="flex space-x-16 animate-loop-scroll group-hover:paused"
        aria-hidden="true"
      >
        <img loading="lazy" src="b1.jpg" class="max-w-none" alt="Image 1" />
        <img loading="lazy" src="b2.jpg" class="max-w-none" alt="Image 2" />
        <img loading="lazy" src="b3.jpg" class="max-w-none" alt="Image 3" />
        <img loading="lazy" src="b4.jpg" class="max-w-none" alt="Image 4" />
        <img loading="lazy" src="b5.jpg" class="max-w-none" alt="Image 5" />
        <img loading="lazy" src="b6.jpg" class="max-w-none" alt="Image 6" />
      </div>
    </div>
  );
};

export default Brands;
