import React from "react";
import fb from "../assets/fb.png";
import tiktok from "../assets/tiktok.png";

const Footer = () => {
  return (
    <div className="absolute bottom-0 text-white h-[25%] w-full px-[5%]">
      <div className="bg-white h-[1px] my-4"></div>
      <div className="flex w-full h-[75%]">
        <div className="flex flex-col justify-center items-center w-[25%]">
        <h1 className="text-4xl font-bold cursor-pointer">FenFilm</h1>
        <div className="flex mt-4">
          <img src={fb} alt="Facebook" width="40px" height="40px" className="mx-4 cursor-pointer"/>
          <img src={tiktok} alt="Tik Tok" width="40px" height="40px" className="mx-4 cursor-pointer"/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[25%]">
        <h1 className="text-4xl font-bold cursor-pointer">FenFilm</h1>
        <div className="flex mt-4">
          <img src={fb} alt="Facebook" width="40px" height="40px" className="mx-4 cursor-pointer"/>
          <img src={tiktok} alt="Tik Tok" width="40px" height="40px" className="mx-4 cursor-pointer"/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[25%]">
        <h1 className="text-4xl font-bold cursor-pointer">FenFilm</h1>
        <div className="flex mt-4">
          <img src={fb} alt="Facebook" width="40px" height="40px" className="mx-4 cursor-pointer"/>
          <img src={tiktok} alt="Tik Tok" width="40px" height="40px" className="mx-4 cursor-pointer"/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[25%]">
        <h1 className="text-4xl font-bold cursor-pointer">FenFilm</h1>
        <div className="flex mt-4">
          <img src={fb} alt="Facebook" width="40px" height="40px" className="mx-4 cursor-pointer"/>
          <img src={tiktok} alt="Tik Tok" width="40px" height="40px" className="mx-4 cursor-pointer"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
