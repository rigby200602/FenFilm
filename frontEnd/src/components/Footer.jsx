import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white h-[25%] w-full px-[5%] mt-[2%]">
      {/* White line */}
      <div className="bg-white h-[1px] my-4"></div>
      <div className="flex w-full h-[75%] justify-center items-center">
        <div className="hidden md:block flex-col  w-[25%]"></div>
        <div className="hidden md:block flex-col  w-[25%]"></div>
        <div className="hidden md:block flex-col  w-[25%]"></div>
        <div className="flex flex-col justify-center items-center w-[25%]">
          <Link to={"/"}
          className="text-4xl font-bold cursor-pointer">FenFilm</Link>
          <div className="flex my-4">
            <Link to={'https://www.facebook.com/fensub20'}><FaFacebookSquare className="mx-4 cursor-pointer mt-[2px]" size={50}/></Link>
            <Link to={'https://www.tiktok.com/@fensub02'}><AiFillTikTok  className="mx-4 cursor-pointer" size={55}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
