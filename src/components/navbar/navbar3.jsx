import React from "react";
import { NavLink } from "react-router-dom";

const Navbar3 = () => {
  return (
    <div className="flex items-center py-10 px-10 font-medium">
      <ul className=" flex flex-col gap-2 font-medium text-[13px] text-gray-600">
        <div className=" flex flex-col gap-1 text-[25px] font-normal text-gray-400">
          Important links
        </div>
        <NavLink
          to="https://www.linkedin.com/in/chinmay-pendam-781b31247/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col  gap-1 cursor-pointer hover:text-gray-400"
        >
          <p>LinkedIn</p>
        </NavLink>
        <NavLink
          to="https://github.com/CopperWar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col cursor-pointer gap-1 hover:text-gray-400"
        >
          <p>Github</p>
        </NavLink>
      </ul>
    </div>
    // <div className="flex items-center py-10 px-10 font-medium">
    //   <ul className=" flex flex-col gap-5 text-[20px] text-gray-700">
    //    <div className="group relative">
    //         <p>Projects</p>
    //         <div className="group-hover:block hidden dropdown-menu pt-4">
    //           <div className="flex flex-col gap-2 w-[230px] py-3 px-5 border-l-4 border-gray-300 text-gray-700">
    //             <p className="cursor-pointer text-[15px] hover:text-gray-400">
    //               Ping-Pong
    //             </p>
    //             <p className="cursor-pointer text-[15px] hover:text-gray-400">
    //               Auto Flight Finder
    //             </p>
    //             <p className="cursor-pointer text-[15px] hover:text-gray-400">
    //               Sakhi - Ecommerce Website
    //             </p>
    //             <p className="cursor-pointer text-[15px] hover:text-gray-400">
    //               Autofish
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </NavLink>
    //   </ul>
    // </div>
  );
};

export default Navbar3;
