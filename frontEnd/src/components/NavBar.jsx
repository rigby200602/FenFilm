import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="w-full mb-[2%]">
      <div className="flex text-white mx-[5%] mt-4 justify-center">
        <SideBar/>
        <Link to={"/"} className="hidden md:block text-4xl font-bold cursor-pointer ml-auto sm:ml-0">
          FenFilm
        </Link>
        <div className="ml-auto hidden md:flex mt-2">
          <Link
            to={"/about-us"}
            className="rounded-4xl cursor-pointer px-4 py-2 bg-white text-[#17252A] hover:bg-purple-800 hover:text-white"
          >
            Chúng tôi
          </Link>
          <SearchBar className='mx-0'/>
        </div>
      </div>

      {/* White line */}
      <div className="bg-white h-[1px] mt-[1%] mx-[5%]"></div>
    </div>
  );
};

export default NavBar;
