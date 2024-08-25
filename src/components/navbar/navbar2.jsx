import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar2.css";

const Navbar2 = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [closingDropdown, setClosingDropdown] = useState(null);

  const handleMouseEnter = (id) => {
    setClosingDropdown(null); // Ensure closing animation is removed on hover
    setOpenDropdown(id);
  };

  const handleMouseLeave = (id) => {
    setOpenDropdown(null); // Set dropdown to close
    setClosingDropdown(id); // Trigger closing animation
    setTimeout(() => {
      if (closingDropdown === id) {
        setClosingDropdown(null); // Reset closing state after animation
      }
    }, 500); // Match the duration of the animation
  };

  return (
    <div className="flex items-center border-b-2 py-10 px-10 font-medium">
      <ul className="flex flex-col gap-3 font-medium text-[13px] text-gray-500">
        <div className="flex flex-col gap-1 text-[25px] font-normal text-gray-400">
          Projects
        </div>
        <NavLink
          to="/"
          className="flex flex-col gap-1 cursor-pointer hover:text-gray-400"
        >
          <div
            className="group relative"
            onMouseEnter={() => handleMouseEnter("java")}
            onMouseLeave={() => handleMouseLeave("java")}
          >
            <p>Java</p>
            <div
              className={`font-medium dropdown-menu ${openDropdown === "java" ? "open" : ""} ${closingDropdown === "java" ? "closing" : ""}`}
            >
              <div className="flex flex-col mt-3 gap-2 py-3 pl-3 border-l-4 border-gray-200 text-gray-500 drop-down-animation">
                <p className="cursor-pointer hover:text-gray-400 fade-in-item">
                  Affordable Flight Finder
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col cursor-pointer gap-1 hover:text-gray-400"
        >
          <div
            className="group relative"
            onMouseEnter={() => handleMouseEnter("python")}
            onMouseLeave={() => handleMouseLeave("python")}
          >
            <p>Python</p>
            <div
              className={`font-medium dropdown-menu ${openDropdown === "python" ? "open" : ""} ${closingDropdown === "python" ? "closing" : ""}`}
            >
              <div className="flex flex-col gap-2 mt-3 py-3 px-3 border-l-4 border-gray-200 text-gray-500">
                <p className="cursor-pointer hover:text-gray-400">
                  AutoFish
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/ideas"
          className="flex flex-col cursor-pointer gap-1 hover:text-gray-400"
        >
          <div
            className="group relative"
            onMouseEnter={() => handleMouseEnter("mern")}
            onMouseLeave={() => handleMouseLeave("mern")}
          >
            <p>MERN STACK</p>
            <div
              className={`font-medium dropdown-menu  ${openDropdown === "mern" ? "open" : ""} ${closingDropdown === "mern" ? "closing" : ""}`}
            >
              <div className="flex flex-col gap-2 mt-3 py-3 px-3 border-l-4 border-gray-200 text-gray-500">
                <p className="cursor-pointer hover:text-gray-400">
                  Portfolio
                </p>
                <p className="cursor-pointer hover:text-gray-400">
                  AherForAll
                </p>
                <p className="cursor-pointer hover:text-gray-400">
                  Sakhi - Ecommerce Website
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/ideas"
          className="flex flex-col cursor-pointer gap-1 hover:text-gray-400"
        >
          <div
            className="group relative"
            onMouseEnter={() => handleMouseEnter("iot")}
            onMouseLeave={() => handleMouseLeave("iot")}
          >
            <p>IOT</p>
            <div
              className={`font-medium dropdown-menu ${openDropdown === "iot" ? "open" : ""} ${closingDropdown === "iot" ? "closing" : ""}`}
            >
              <div className="flex flex-col gap-2 mt-3 py-3 px-3 border-l-4 border-gray-200 text-gray-500">
                <p className="cursor-pointer hover:text-gray-400">
                  Pulse rate and Oximetry
                </p>
                <p className="cursor-pointer hover:text-gray-400">
                  Fish Tracker
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar2;
