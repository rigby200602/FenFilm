import React from "react";

const NavBar = () => {
  return (
    <div className="w-full">
      <div className="flex text-white mx-[5%] mt-4">
        <h1 className="text-4xl font-bold cursor-pointer">FenFilm</h1>
        <div className="ml-auto">
          <button className="rounded-4xl cursor-pointer px-4 py-2 bg-white text-[#17252A] hover:bg-purple-800 hover:text-white">
            Ủng hộ tôi
          </button>
        </div>
      </div>
      <div className="bg-white h-[1px] mt-[1%] mx-[5%]"></div>
    </div>
  );
};

export default NavBar;
