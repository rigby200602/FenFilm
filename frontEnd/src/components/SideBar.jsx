import React from "react";
const { useState } = React;
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const SideBar = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleMenu = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="block mr-auto md:hidden">
      {/* Menu for small screen */}
      <div className="">
        <RiMenu3Line
          size={40}
          className="text-white cursor-pointer"
          onClick={() => toggleMenu()}
        />
        {isOn ? (
          <div className="flex flex-col bg-inherit">
            <Link to={"/about-us"} className="text-white">
              <span className="flex items-center">
                <FaUserAlt />
                Chúng tôi
              </span>
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
