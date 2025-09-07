import React from "react";
import fb from "../assets/fb.png";

const Footer = () => {
  return (
    <div className="absolute bottom-0 text-white h-[25%] w-full px-[5%]">
      <div className="bg-white h-[1px] my-4"></div>
      <div className="flex flex-col justify-center w-[25%]">
        <h1 className="text-4xl font-bold cursor-pointer">FenFilm</h1>
        <div className="mt-4">
          <img src={fb} alt="Facebook" width="50px" height="50px" />
          <img />
        </div>
      </div>
    </div>
  );
};

export default Footer;
