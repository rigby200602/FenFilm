import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white h-[25%] w-full px-[5%]">
      {/* White line */}
      <div className="bg-white h-[1px] my-4"></div>
      <div className="flex w-full h-[75%]">
        <div className="flex flex-col justify-center items-center w-[25%]"></div>
        <div className="flex flex-col justify-center items-center w-[25%]"></div>
        <div className="flex flex-col justify-center items-center w-[25%]"></div>
        <div className="flex flex-col justify-center items-center w-[25%]">
          <h1 className="text-4xl font-bold cursor-pointer">FenFilm</h1>
          <div className="flex my-4">
            <FaFacebookSquare className="mx-4 cursor-pointer mt-[2px]" size={50}/>
            <AiFillTikTok  className="mx-4 cursor-pointer" size={55}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
