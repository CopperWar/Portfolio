import React, { useRef, useEffect } from "react";
import { assets } from "../../assets/code/assets";
import "./about.css";

const About = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollStep = 2; // Distance to scroll per step
    const scrollInterval = 10; // Interval in milliseconds
    const scrollAmount = 500; // Total distance to scroll
    let scrolled = 0;

    const scroll = () => {
      if (scrolled < scrollAmount) {
        scrollContainer.scrollBy(0, scrollStep);
        scrolled += scrollStep;
      } else {
        // Stop scrolling once the desired amount is reached
        clearInterval(intervalId);
      }
    };

    // Start scrolling after 5 seconds
    const delay = 5000;
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(scroll, scrollInterval);

      // Cleanup on unmount
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }, delay);

    // Cleanup on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="scroll-container relative w-full h-full overflow-auto hide-scrollbar"
    >
      <div className="text-center relative flex flex-col  justify-center w-full h-full bg-gradient-background">
        <div className="-mt-[250px] fade-in">
          <div className="text-[25px] text-white font-semibold  ">
            I long for eternity.
          </div>
          <div className="text-[25px] text-white font-semibold pt-[30px]  ">
            Because there I shall meet
          </div>
          <div className="text-[25px] text-white font-semibold pt-[30px]  ">
            my unwritten poems and
          </div>
          <div className="text-[25px] text-white font-semibold pt-[30px] ">
            my unpainted pictures
          </div>
        </div>

        <div className="clouds absolute overflow-clip top-0 left-0 w-full h-full pointer-events-none">
          <img
            src={assets.cloud1}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 1 }}
          />
          <img
            src={assets.cloud2}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 2 }}
          />
          <img
            src={assets.cloud3}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 3 }}
          />
          <img
            src={assets.cloud4}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 4 }}
          />
          <img
            src={assets.cloud5}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 5 }}
          />
          <img
            src={assets.cloud1}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 6 }}
          />
          <img
            src={assets.cloud2}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 7 }}
          />
          <img
            src={assets.cloud3}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 8 }}
          />
          <img
            src={assets.cloud4}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 9 }}
          />
          <img
            src={assets.cloud5}
            alt=""
            className="absolute bottom-0 max-w-full animate-cloud"
            style={{ "--i": 10 }}
          />
        </div>
      </div>
      <div className="text-[14px]">
        Back when I was in 8th Grade, I decided to try my hand at creating a simple website
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, I'm able to build engaging websites, AI/ML softwares and IoT projects
      </div>
      <div className="flex justify-center border-t-2 p-4 border-gray-200">
        Chinmay Pendam
      </div>
    </div>
  );
};

export default About;
