import React from "react";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="flex items-center border-b-2 py-10 px-10 font-medium">
      <ul className=" flex flex-col gap-1 text-[25px] text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col  gap-1 cursor-pointer hover:text-gray-400"
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col cursor-pointer gap-1 hover:text-gray-400"
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="/ideas"
          className="flex flex-col  cursor-pointer gap-1 hover:text-gray-400"
        >
          <p>Ideas</p>
        </NavLink>
        <NavLink
          to="/cv"
          className="flex flex-col  cursor-pointer gap-1 hover:text-gray-400"
        >
          <p>CV</p>
        </NavLink>
        
      </ul>
    </div>
  );
};

export default Navbar1;
