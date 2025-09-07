import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex text-white mx-[5%] mt-4">
        <h1 className="text-4xl font-bold cursor-pointer">FenFilm</h1>
        <div className="ml-auto">
          <button className="rounded-4xl cursor-pointer px-4 py-2 hover:bg-white hover:text-[#17252A]">
            Ủng hộ tôi
          </button>
        </div>
      </div>
      <div className="w-full bg-white h-[1px] mt-4">
        <br />
      </div>
    </>
  );
};

export default NavBar;
