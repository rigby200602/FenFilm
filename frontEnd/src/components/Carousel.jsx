import React, { useContext, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AppContext } from "../context/AppContext";

const Carousel = ({ data }) => {
  const { navigate } = useContext(AppContext)
   // State to keep track of the current slide
  const [slide, setSlide] = useState(0);
  // Function to go to the next slide
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  // Function to go to the previous slide
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="flex justify-center items-center px-[5%]">
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
            loading="lazy"
            className={slide === i ? "w-full max-h-135 cursor-pointer" : "hidden"}
            onClick={() => navigate(`/collections/${item.collection}`)}
          />
        );
      })}
      <span className="hover:opacity-50 transition hover:-translate-y-1 absolute right-[5.5%]">
        <BsArrowRightCircleFill
          size={50}
          onClick={nextSlide}
          color="white"
          className="hidden md:block cursor-pointer"
        />
      </span>
      <span className="flex absolute mt-[30%] space-x-2">
        {data.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={
                slide === i
                  ? "text-white text-3xl md:text-4xl lg:text-5xl cursor-pointer"
                  : "text-gray-400 text-3xl md:text-4xl lg:text-5xl cursor-pointer"
              }
            >
              •
            </button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
