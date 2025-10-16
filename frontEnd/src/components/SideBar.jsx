import React from "react";
const { useState } = React;
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

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
            {/* Home page */}
            <Link to={"/"} className="text-white">
              <span className="flex items-center my-2">
                <IoHome className="mr-2"/>
                Trang chủ
              </span>
            </Link>
            {/* About us page */}
            <Link to={"/about-us"} className="text-white">
              <span className="flex items-center my-2">
                <FaUserAlt className="mr-2"/>
                Chúng tôi
              </span>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
