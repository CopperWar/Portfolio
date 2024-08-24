import React from "react";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="flex items-center border-b-2 py-10 px-10 font-medium">
      <ul className=" flex flex-col gap-2 font-medium text-[13px] text-gray-500">
        <div className=" flex flex-col gap-1 text-[25px] font-normal text-gray-400">
          Projects
        </div>
        <NavLink
          to="/"
          className="flex flex-col  gap-1 cursor-pointer hover:text-gray-400"
        >
          <p>Java</p>
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col cursor-pointer gap-1 hover:text-gray-400"
        >
          <p>Python</p>
        </NavLink>
        <NavLink
          to="/ideas"
          className="flex flex-col  cursor-pointer gap-1 hover:text-gray-400"
        >
          <p>MERN STACK</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar2;
