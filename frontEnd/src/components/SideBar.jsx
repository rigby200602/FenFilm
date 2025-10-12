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
    <div className="block mr-auto">
      {/* Menu for small screen */}
      <div className="md:hidden">
        <RiMenu3Line
          size={40}
          className="text-white cursor-pointer"
          onClick={() => toggleMenu()}
        />
        {isOn ? (
          <div className="flex flex-col h-full w-80 bg-inherit duration-300 ease-in-out z-1">
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
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
