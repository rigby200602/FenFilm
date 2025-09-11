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
    <div className="flex relative justify-center items-center w-full px-[5%] my-[2%]">
      <span className="hover:opacity-50">
        <BsArrowLeftCircleFill
          size={50}
          onClick={prevSlide}
          color="white"
          className="absolute cursor-pointer left-0 ml-[5%]"
        />
      </span>
      {/* Render slides */}
      {data.map((item, i) => {
        return (
          <img
            key={i}
            src={item.url}
            alt={item.title}
            className={slide === i ? "w-full max-h-120" : "hidden"}
          />
        );
      })}
      <span className="hover:opacity-50">
        <BsArrowRightCircleFill
          size={50}
          onClick={nextSlide}
          color="white"
          className="absolute cursor-pointer right-0 mr-[5%]"
        />
      </span>
    </div>
  );
};

export default Carousel;
