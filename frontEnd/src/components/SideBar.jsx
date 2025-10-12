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
      <div className="absolute ml-[5%] left-0 md:hidden">
        <RiMenu3Line
          size={40}
          className="text-white cursor-pointer"
          onClick={() => toggleMenu()}
        />
        {isOn ? (
          <div className="transittion left-[-15vw] w-3xl h-lvw bg-inherit duration-300 ease-in-out">
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
