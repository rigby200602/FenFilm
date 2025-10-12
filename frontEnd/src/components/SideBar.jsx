import React from "react";
const { useState } = React;
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleMenu = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      {/* Menu for small screen */}
      <div className="absolute left-0 md:hidden">
        <RiMenu3Line
          size={40}
          className="text-white cursor-pointer ml-[5%]"
          onClick={() => toggleMenu()}
        />
        <div className={`${isOn ? 'h-[300lvw] w-120':''} "flex flex-col transittion  bg-[#0e0e18] duration-300 ease-in-out z-1"`}>
          <Link to={"/about-us"} className="text-white">
            Chúng tôi
          </Link>
          <Link to={"/about-us"} className="text-white">
            Chúng tôi
          </Link>
          <Link to={"/about-us"} className="text-white">
            Chúng tôi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
