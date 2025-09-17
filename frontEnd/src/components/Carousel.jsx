import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ data }) => {
  // State to keep track of the current slide
  const [slide, setSlide] = useState(0);
  // Function to go to the next slide
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  // Function to go to the previous slide
  const prevSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide - 1);
  };

  return (
    <div className="flex relative justify-center items-center w-full px-[5%]">
      <span className="hover:opacity-50 mb-[4%] transition hover:-translate-y-1">
        <BsArrowLeftCircleFill
          size={50}
          onClick={prevSlide}
          color="white"
          className="hidden md:block absolute cursor-pointer ml-2"
        />
      </span>
      {/* Render slides */}
      {data.map((item, i) => {
        return (
          <img
            key={i}
            src={item.url}
            alt={item.title}
            className={slide === i ? "w-full max-h-135" : "hidden"}
          />
        );
      })}
      <span className="hover:opacity-50 mb-[4%] transition hover:-translate-y-1">
        <BsArrowRightCircleFill
          size={50}
          onClick={nextSlide}
          color="white"
          className="hidden md:block absolute cursor-pointer right-0  mr-[5.5%]"
        />
      </span>
      <span className="flex absolute bottom-4 space-x-2">
        {data.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={slide === i ? "text-white text-5xl cursor-pointer" : "text-gray-400 text-5xl cursor-pointer"}>
              •
            </button>
          )
        })}
      </span>
    </div>
  );
};

export default Carousel;
