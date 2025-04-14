import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full  p-[10px]  flex justify-between items-center fixed shadow-lg z-[4] bg-white">
      <Link to={"/"} className="no-underline ">
        <div className="flex gap-2">
          <div className="relative">
            <span className="block text-[24px] ">AU-CSS</span>
            <span className="block">Interactive CSS Library</span>
          </div>
        </div>
      </Link>
      <ul className="flex justify-self text-[24px] items-center gap-[4vw]  list-none w-[70vw] ">
        <li>
          <a href="#" className="no-underline text-black hover:underline  text-2xl">
            About
          </a>
        </li>
        <li>
          <a href="#" className="no-underline text-black  text-2xl ">Home</a>
        </li>
        <li>
          <a href="#" className="no-underline text-black  text-2xl">Contact</a>
        </li>
        <li>
          <a href="#" className="no-underline text-black  text-2xl">Help</a>
        </li>
        <li>
          <input type="text" placeholder="Search..." className="bg-white rounded h-[30] pl-[5px] outline-none border-none " />
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;

