import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div>
      <div className="bg-[#2699fb] flex justify-between p-3 items-center">
        <div className="text-[28px]">
          <img
            className="h-[55px] md:h-[70px] lg:h-[80px] rounded-full"
            src="https://i.pinimg.com/originals/8c/22/48/8c2248f99064f6a396ce96fb9a4b637c.jpg"
            alt=""
          />
        </div>
        {toggle ? (
          <AiOutlineMenu
            className="text-white text-[24px] md:hidden"
            onClick={toggler}
          />
        ) : (
          <AiOutlineClose
            className="text-white text-[24px] md:hidden"
            onClick={toggler}
          />
        )}

        <ul className="hidden md:flex gap-8 lg:gap-16  text-[18px] text-white cursor-pointer">
          <li className="navbar-hover-effect">Home</li>
          <li className="navbar-hover-effect">About</li>
          <li className="navbar-hover-effect">Compaany</li>
          <li className="navbar-hover-effect">Resources</li>
          <li className="navbar-hover-effect">Contact</li>
          <li></li>
        </ul>
        {/* For Small devices */}
        <ul
          className={`md:hidden duration-500 gap-12 px-4 space-y-7 w-full h-screen text-white bg-black text-[18px] cursor-pointer fixed top-[78px] 
            ${toggle ? `left-[-100%]` : `left-[0]`}

          `}
        >
          <li></li>
          <li>Home</li>
          <li>About</li>
          <li>Compaany</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
