import React from "react";
const { useState } = React;
import { RiMenu3Line } from "react-icons/ri";

const SideBar = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleMenu = () => {
    setIsOn(!isOn);
  };
  return <div>
    {/* Menu for small screen */}
        <div className="absolute ml-[5%] left-0 md:hidden">
          <RiMenu3Line
            size={40}
            className="text-white cursor-pointer"
            onClick={() => toggleMenu()}
          />
          {isOn ? (
            <div className="h-100 bg-inherit">
              <Link to={"/about-us"} className="text-white">
                Chúng tôi
              </Link>
            </div>
          ) : null}
        </div>
  </div>;
};

export default SideBar;
