import React from "react";
import { assets } from "../../assets/code/assets";
import "./about.css";

const About = () => {
  return (
    <div className=" w-full h-full ">
      <div className="text-center relative flex flex-col justify-center w-full h-full pt-[50px] bg-gradient-background">
        <div className="text-[25px] text-white font-semibold pt-[30px]">
          I long for eternity.
        </div>
        <div className="text-[25px] text-white font-semibold pt-[30px]">
          Because there I shall meet
        </div>
        <div className="text-[25px] text-white font-semibold pt-[30px]">
          my unwritten poems and
        </div>
        <div className="text-[25px] text-white font-semibold pt-[30px]">
          my unpainted pictures
        </div>
      </div>
      <div className="clouds absolute top-0 left-0 w-full h-full pointer-events-none">
        <img src={assets.cloud1} alt="" style={{ "--i": 1 }} />
        <img src={assets.cloud2} alt="" style={{ "--i": 2 }} />
        <img src={assets.cloud3} alt="" style={{ "--i": 3 }} />
        <img src={assets.cloud4} alt="" style={{ "--i": 4 }} />
        <img src={assets.cloud5} alt="" style={{ "--i": 5 }} />
        <img src={assets.cloud1} alt="" style={{ "--i": 6 }} />
        <img src={assets.cloud2} alt="" style={{ "--i": 7 }} />
        <img src={assets.cloud3} alt="" style={{ "--i": 8 }} />
        <img src={assets.cloud4} alt="" style={{ "--i": 9 }} />
        <img src={assets.cloud5} alt="" style={{ "--i": 10 }} />
      </div>
    </div>
  );
};

export default About;
